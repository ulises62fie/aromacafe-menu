const categories = [
  { key: "todo", label: "Todo" },
  { key: "bebidas", label: "Bebidas" },
  { key: "comida", label: "Comida" },
  { key: "postres", label: "Postres" },
  { key: "desayunos", label: "Desayunos" },
  { key: "combos" , label : "Combos" },
];

const filtersEl = document.getElementById("filters");
const container = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
let activeCategory = "todo";

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function createFilters() {
  filtersEl.innerHTML = "";
  categories.forEach((cat) => {
    const button = document.createElement("button");
    button.className = "filter-btn" + (cat.key === activeCategory ? " active" : "");
    button.textContent = cat.label;
    button.type = "button";
    button.addEventListener("click", () => {
      activeCategory = cat.key;
      createFilters();
      renderMenu();
    });
    filtersEl.appendChild(button);
  });
}

function sectionMatches(section, query) {
  if (activeCategory !== "todo" && section.category !== activeCategory) return false;
  if (!query) return true;
  const haystack = normalize([
    section.title,
    section.tag,
    section.note,
    ...section.items.flatMap((item) => [item.name, item.price, item.desc])
  ].join(" "));
  return haystack.includes(query);
}

function renderMenu() {
  const query = normalize(searchInput.value.trim());
  const visibleSections = window.MENU_DATA.filter((section) => sectionMatches(section, query));
  container.innerHTML = "";

  visibleSections.forEach((section) => {
    const card = document.createElement("article");
    card.className = "menu-card";

    const itemsHtml = section.items.map((item) => `
      <div class="item">
        <div>
          <span class="item-name">${item.name}</span>
          ${item.desc ? `<span class="item-desc">${item.desc}</span>` : ""}
        </div>
        <span class="price">${item.price}</span>
      </div>
    `).join("");

    card.innerHTML = `
      <header>
        <h3>${section.title}</h3>
        <span class="tag">${section.tag}</span>
      </header>
      <div class="items">${itemsHtml}</div>
      ${section.note ? `<div class="note">${section.note}</div>` : ""}
    `;
    container.appendChild(card);
  });

  emptyState.hidden = visibleSections.length !== 0;
}

searchInput.addEventListener("input", renderMenu);
createFilters();
renderMenu();
