
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}
const calendar = document.getElementById("calendar");
const today = new Date();
let events = {};

function generateCalendar(month = today.getMonth(), year = today.getFullYear()) {
  calendar.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendar.appendChild(empty);
  }

  for (let d = 1; d <= lastDate; d++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerText = d;
    day.onclick = () => openModal(d, month, year);
    calendar.appendChild(day);
  }
}

generateCalendar();

const modal = document.getElementById("eventModal");
let selectedDate = null;

function openModal(d, m, y) {
  selectedDate = `${d}/${m+1}/${y}`;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function saveEvent() {
  const title = document.getElementById("eventTitle").value;
  const desc = document.getElementById("eventDesc").value;
  const cat = document.getElementById("eventCategory").value;
  const attach = document.getElementById("eventAttachment").files[0];

  if (!events[selectedDate]) events[selectedDate] = [];
  events[selectedDate].push({title, desc, cat, attach});

  alert("Evento salvo!");
  closeModal();
}
const libraryResults = document.getElementById("libraryResults");

function searchLibrary() {
  const query = document.getElementById("searchInput").value;
  if (!query) return;

  libraryResults.innerHTML = `<p>Buscando por "${query}"... (API futura aqui)</p>`;
}

function addManualItem() {
  const title = prompt("Digite o título:");
  if (title) {
    const item = document.createElement("div");
    item.classList.add("library-item");
    item.innerText = title;
    libraryResults.appendChild(item);
  }
}
