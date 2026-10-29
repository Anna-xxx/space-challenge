// Доска хаба: карточки = задачи GitHub, колонка = метка «колонка:…».
const REPO = "Anna-xxx/space-challenge";
const API = "https://api.github.com";

const COLUMNS = [
  { name: "Бэклог", sub: "Ещё не начато" },
  { name: "В работе", sub: "Ветка сейчас делает" },
  { name: "Ожидание", sub: "Проверяют Безопасник и Тестировщик" },
  { name: "Ждёт Анну", sub: "Всё проверено, нужно твоё «да»" },
  { name: "На паузе", sub: "Не трогаем, пока не скажешь" },
  { name: "Готово", sub: "Закрыто после вашего «да»" },
];
const ROLES = ["Разработчик", "Дизайнер", "SEO-специалист", "Переводчик", "Юрист", "Бизнес-аналитик",
  "Писатель", "Парсер", "Безопасник", "Тестировщик", "Анна"];
const MODELS = { opus: "Opus 5.5", sonnet: "Sonnet 5.5", haiku: "Haiku 5.5" };
const EFFORTS = ["low", "medium", "high", "xhigh", "max"];
// Стандартные голоса ElevenLabs; любой другой можно указать по ID
const VOICES = { "21m00Tcm4TlvDq8ikWfM": "Rachel (женский)", "EXAVITQu4vr4xnSDxMaL": "Bella (женский)",
  "MF3mGyEYCl7XYWbV9V6O": "Elli (женский)", "pNInz6obpgDQGcFmaJgB": "Adam (мужской)",
  "ErXwobaYiR2CmRWbXPLc": "Antoni (мужской)", "TxGEqnHWrfWFTfGW9XjX": "Josh (мужской)" };

const $ = (s) => document.querySelector(s);
let token = "";
let issues = [];

try { token = localStorage.getItem("gh-token") || ""; } catch {}

async function gh(path, opts = {}) {
  const res = await fetch(API + path, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      ...(opts.body ? { "Content-Type": "application/json" } : {}),
    },
  });
  if (res.status === 401) throw new Error("Токен не подходит: возможно, он скопирован не целиком или истёк.");
  if (res.status === 403 || res.status === 404) throw new Error("У токена нет доступа к space-challenge. Проверьте, что выбран этот репозиторий и права Issues и Contents: Read and write.");
  if (!res.ok) throw new Error(`GitHub ответил ошибкой ${res.status}. Попробуйте ещё раз.`);
  return res.status === 204 ? null : res.json();
}

function logout(reason) {
  token = "";
  try { localStorage.removeItem("gh-token"); } catch {}
  $("#conn").textContent = "Не подключено";
  $("#conn").classList.remove("ok");
  $("#loginBtn").hidden = false;
  $("#loginError").textContent = reason || "";
  $("#loginError").hidden = !reason;
  if (!$("#login").open) $("#login").showModal();
}

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const labelNames = (i) => i.labels.map((l) => l.name);
const pick = (i, prefix) => labelNames(i).filter((n) => n.startsWith(prefix)).map((n) => n.slice(prefix.length));

function columnOf(i) {
  const c = pick(i, "колонка:")[0];
  if (c) return c;
  return i.state === "closed" ? "Готово" : "Бэклог";
}

// Короткий статус хранится в теле задачи: <!-- статус: 24.10 текст -->
function statusOf(i) {
  const m = (i.body || "").match(/<!-- статус: (.*?) -->/);
  return m ? m[1] : "";
}

function render() {
  const board = $("#board");
  board.innerHTML = "";
  for (const col of COLUMNS) {
    const cards = issues.filter((i) => columnOf(i) === col.name);
    const el = document.createElement("section");
    el.className = "column";
    el.innerHTML = `<h2>${col.name}<span>${cards.length}</span></h2><p class="sub">${col.sub}</p>`;
    if (!cards.length) el.insertAdjacentHTML("beforeend", `<p class="empty">Пусто</p>`);
    cards.forEach((i) => el.append(cardEl(i)));
    board.append(el);
  }
}

function cardEl(i) {
  const el = document.createElement("article");
  el.className = "card";
  const isPR = !!i.pull_request;
  const model = pick(i, "модель:")[0];
  const effort = pick(i, "мощность:")[0];
  const status = statusOf(i);
  const [date, ...rest] = status.split(" ");
  el.innerHTML = `
    <div class="kind">${isPR ? `<a href="${i.html_url}" target="_blank" rel="noopener">#${i.number}</a><span>PR</span>` : `<span></span><span>задача</span>`}</div>
    <h3>${esc(i.title)}</h3>
    <div class="tags">
      ${pick(i, "кто:").map((r) => `<span class="tag">${esc(r)}</span>`).join("")}
      ${labelNames(i).includes("elevenlabs") ? `<span class="tag">ElevenLabs</span>` : ""}
      ${labelNames(i).includes("блокер запуска") ? `<span class="tag block">Блокер запуска</span>` : ""}
      ${model || effort ? `<span class="tag ai">${esc(MODELS[model] || "Claude решит")} · ${esc(effort || "—")}</span>` : ""}
    </div>
    ${status ? `<p class="status">${/^\d\d\.\d\d$/.test(date) ? `<time>${esc(date)}</time>${esc(rest.join(" "))}` : esc(status)}</p>` : ""}
    <div class="foot">
      <span class="count" title="Комментарии">💬 ${i.comments}</span>
      <select aria-label="Колонка">${COLUMNS.map((c) => `<option ${c.name === columnOf(i) ? "selected" : ""}>${c.name}</option>`).join("")}</select>
    </div>`;
  const sel = el.querySelector("select");
  sel.addEventListener("click", (e) => e.stopPropagation());
  sel.addEventListener("change", () => moveTo(i, sel.value));
  el.addEventListener("click", () => openCard(i));
  return el;
}

async function moveTo(i, col) {
  const keep = labelNames(i).filter((n) => !n.startsWith("колонка:"));
  const updated = await gh(`/repos/${REPO}/issues/${i.number}/labels`, {
    method: "PUT", body: JSON.stringify({ labels: [...keep, `колонка:${col}`] }),
  });
  i.labels = updated;
  render();
}

async function load() {
  const list = [];
  for (let page = 1; page <= 5; page++) {
    const chunk = await gh(`/repos/${REPO}/issues?state=all&per_page=100&page=${page}`);
    list.push(...chunk);
    if (chunk.length < 100) break;
  }
  issues = list;
  $("#conn").textContent = "Claude на связи";
  $("#conn").classList.add("ok");
  $("#loginBtn").hidden = true;
  $("#loginError").hidden = true;
  render();
}

// Картинки: файл кладётся в репозиторий (uploads/), в текст вставляется ссылка.
async function uploadImage(file) {
  const b64 = await new Promise((ok) => {
    const r = new FileReader();
    r.onload = () => ok(String(r.result).split(",")[1]);
    r.readAsDataURL(file);
  });
  const ext = (file.type.split("/")[1] || "png").replace("jpeg", "jpg");
  const path = `uploads/${Date.now()}.${ext}`;
  const res = await gh(`/repos/${REPO}/contents/${path}`, {
    method: "PUT", body: JSON.stringify({ message: `Картинка для доски: ${path}`, content: b64 }),
  });
  return `![картинка](${res.content.html_url}?raw=true)`;
}

function enablePaste(textarea) {
  textarea.addEventListener("paste", async (e) => {
    const file = [...e.clipboardData.files].find((f) => f.type.startsWith("image/"));
    if (!file) return;
    e.preventDefault();
    const at = textarea.selectionStart;
    textarea.setRangeText("[загружаю картинку…]", at, at, "end");
    try {
      const md = await uploadImage(file);
      textarea.value = textarea.value.replace("[загружаю картинку…]", md);
    } catch (err) {
      textarea.value = textarea.value.replace("[загружаю картинку…]", "");
      alertInline(textarea, `Картинку загрузить не удалось: ${err.message}`);
    }
  });
}

function alertInline(near, text) {
  const p = document.createElement("p");
  p.className = "hint";
  p.textContent = text;
  near.after(p);
  setTimeout(() => p.remove(), 6000);
}

// Текст комментария: картинки, строки «•» как кнопки вариантов, «★» — рекомендуемый.
function renderText(text, onPick) {
  const wrap = document.createElement("div");
  let options = null;
  for (const line of String(text).split("\n")) {
    const opt = line.match(/^\s*[•★]\s*(.+)$/);
    if (opt) {
      if (!options) { options = document.createElement("div"); options.className = "options"; wrap.append(options); }
      const b = document.createElement("button");
      b.type = "button";
      const label = opt[1].replace(/^★\s*/, "");
      b.textContent = (line.includes("★") ? "★ " : "") + label;
      if (line.includes("★")) b.classList.add("rec");
      b.addEventListener("click", () => onPick(label));
      options.append(b);
      continue;
    }
    options = null;
    const p = document.createElement("p");
    p.innerHTML = esc(line).replace(/!\[[^\]]*\]\((https:[^)\s]+)\)/g, '<img src="$1" alt="">');
    wrap.append(p);
  }
  return wrap;
}

let current = null;

// Разбор раздела «### Имя» из тела карточки (формат шаблона задач GitHub)
function section(body, name) {
  const m = body.match(new RegExp(`### ${name.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=\\n### |$)`));
  const v = m ? m[1].trim() : "";
  return v === "_No response_" ? "" : v;
}

// Карточка открывается той же формой, что и при создании, с перепиской ниже
async function openCard(i) {
  const form = $("#newForm");
  resetForm();
  current = i;
  $("#formTitle").textContent = `Карточка #${i.number}`;
  $("#createHint").hidden = true;
  form.querySelector("button.primary").textContent = "Сохранить изменения";
  form.title.value = i.title;
  const raw = (i.body || "").replace(/<!--[\s\S]*?-->/g, "").trim();
  const eleven = labelNames(i).includes("elevenlabs");
  form.body.value = eleven ? (section(raw, "Текст для озвучки / что нужно сделать") || raw) : raw;
  const who = pick(i, "кто:");
  form.querySelectorAll("[name=who]").forEach((c) => { c.checked = who.includes(c.value); });
  form.blocker.checked = labelNames(i).includes("блокер запуска");
  const st = statusOf(i);
  form.status.value = st.replace(/^\d\d\.\d\d /, "");
  form.status.dataset.orig = st;
  form.querySelector(`[name=ai][value=${eleven ? "elevenlabs" : "claude"}]`).checked = true;
  $("#claudeFields").hidden = eleven;
  $("#elevenFields").hidden = !eleven;
  form.model.value = pick(i, "модель:")[0] || "";
  form.effort.value = pick(i, "мощность:")[0] || "";
  if (eleven) {
    const v = section(raw, "Голос");
    if (v && !VOICES[v]) { form.voice.value = "custom"; form.voiceId.value = v; $("#voiceIdField").hidden = false; }
    else if (v) form.voice.value = v;
  }
  $("#cvLink").href = i.html_url;
  $("#editExtra").hidden = false;
  if (!$("#newCard").open) $("#newCard").showModal();
  await loadComments();
}

async function loadComments() {
  const box = $("#cvComments");
  box.innerHTML = `<p class="hint">Загружаю…</p>`;
  const comments = await gh(`/repos/${REPO}/issues/${current.number}/comments?per_page=100`);
  box.innerHTML = "";
  // По порядку: старые сверху, новые снизу, поле ответа под ними
  for (const c of comments) {
    const el = document.createElement("div");
    el.className = "comment";
    el.innerHTML = `<div class="who">${esc(c.user.login)} · ${new Date(c.created_at).toLocaleString("ru")}</div>`;
    el.append(renderText(c.body, (choice) => sendComment(choice)));
    box.append(el);
  }
  if (!comments.length) box.innerHTML = `<p class="hint">Комментариев пока нет</p>`;
  box.scrollTop = box.scrollHeight;
}

async function sendComment(text) {
  if (!current || !text.trim()) return;
  await gh(`/repos/${REPO}/issues/${current.number}/comments`, { method: "POST", body: JSON.stringify({ body: text }) });
  current.comments++;
  render();
  await loadComments();
}

function resetForm() {
  const form = $("#newForm");
  form.reset();
  current = null;
  $("#formTitle").textContent = "Новая задача";
  $("#createHint").hidden = false;
  form.querySelector("button.primary").textContent = "Сохранить";
  form.status.dataset.orig = "";
  $("#claudeFields").hidden = false;
  $("#elevenFields").hidden = true;
  $("#voiceIdField").hidden = true;
  $("#editExtra").hidden = true;
}

// --- Новая карточка ---
function fillForm() {
  $("#whoBoxes").innerHTML = ROLES.map((r) => `<label class="chip"><input type="checkbox" name="who" value="${r}"> ${r}</label>`).join("");
  $("#newForm [name=model]").innerHTML = `<option value="">Claude решит</option>` +
    Object.entries(MODELS).map(([k, v]) => `<option value="${k}">${v}</option>`).join("");
  $("#newForm [name=voice]").innerHTML = Object.entries(VOICES).map(([id, n]) => `<option value="${id}">${n}</option>`).join("") +
    `<option value="custom">Свой голос по ID</option>`;
  $("#newForm [name=voice]").addEventListener("change", (e) => { $("#voiceIdField").hidden = e.target.value !== "custom"; });
  $("#newForm").querySelectorAll("[name=ai]").forEach((r) => r.addEventListener("change", () => {
    const eleven = $("#newForm [name=ai]:checked").value === "elevenlabs";
    $("#claudeFields").hidden = eleven;
    $("#elevenFields").hidden = !eleven;
  }));
  $("#newForm [name=effort]").innerHTML = `<option value="">Claude решит</option>` +
    EFFORTS.map((e) => `<option>${e}</option>`).join("");
}

// Метки, которыми управляет форма; остальные (колонка, needs-review и т.п.) сохраняются
const FORM_LABEL = (n) => n.startsWith("кто:") || n.startsWith("модель:") || n.startsWith("мощность:") ||
  n === "блокер запуска" || n === "elevenlabs";

$("#newForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const editing = current;
  const labels = editing ? labelNames(editing).filter((n) => !FORM_LABEL(n)) : ["колонка:Бэклог"];
  for (const w of f.getAll("who")) labels.push(`кто:${w}`);
  if (f.get("blocker")) labels.push("блокер запуска");
  const eleven = f.get("ai") === "elevenlabs";
  if (eleven) labels.push("elevenlabs");
  if (!eleven && f.get("model")) labels.push(`модель:${f.get("model")}`);
  if (!eleven && f.get("effort")) labels.push(`мощность:${f.get("effort")}`);
  const now = new Date();
  const dd = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}`;
  const status = String(f.get("status") || "").trim();
  const orig = e.target.status.dataset.orig || "";
  // Дату статуса обновляем, только если сам текст изменился
  const statusLine = !status ? "" : orig.replace(/^\d\d\.\d\d /, "") === status ? orig : `${dd} ${status}`;
  let text = String(f.get("body") || "");
  if (eleven) {
    // Формат как у шаблона задачи ElevenLabs: workflow берёт текст и голос из этих разделов
    const voice = f.get("voice") === "custom" ? String(f.get("voiceId") || "").trim() : f.get("voice");
    text = `### Текст для озвучки / что нужно сделать\n\n${text}\n\n### Голос\n\n${voice || "_No response_"}`;
  }
  const body = text + (statusLine ? `\n\n<!-- статус: ${statusLine} -->` : "");
  const btn = e.target.querySelector("button.primary");
  btn.disabled = true;
  try {
    const payload = JSON.stringify({ title: f.get("title"), body, labels });
    if (editing) {
      const updated = await gh(`/repos/${REPO}/issues/${editing.number}`, { method: "PATCH", body: payload });
      Object.assign(editing, updated);
      alertInline(btn, "Сохранено");
    } else {
      const created = await gh(`/repos/${REPO}/issues`, { method: "POST", body: payload });
      issues.unshift(created);
      resetForm();
      $("#newCard").close();
    }
    render();
  } catch (err) {
    alertInline(btn, `Не удалось сохранить: ${err.message}`);
  } finally {
    btn.disabled = false;
  }
});

$("#commentForm textarea").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
    e.preventDefault();
    const text = e.target.value;
    e.target.value = "";
    sendComment(text).catch((err) => { e.target.value = text; alertInline(e.target, err.message); });
  }
});

$("#loginForm").addEventListener("submit", () => {
  token = $("#tokenInput").value.trim();
  try { localStorage.setItem("gh-token", token); } catch {}
  load().catch((err) => logout(err.message));
});

$("#addBtn").addEventListener("click", () => { resetForm(); $("#newCard").showModal(); });
$("#newCard").addEventListener("close", () => { current = null; });
document.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", () => b.closest("dialog").close()));
enablePaste($("#newForm [name=body]"));
enablePaste($("#commentForm textarea"));

fillForm();
$("#loginBtn").addEventListener("click", () => $("#login").showModal());
// Если токен не подошёл или сеть недоступна, окно входа откроется снова.
if (token) load().catch((err) => logout(err.message)); else $("#login").showModal();
setInterval(() => { if (token && !document.querySelector("dialog[open]")) load().catch(() => {}); }, 60000);
