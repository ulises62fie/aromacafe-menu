const menuContainer = document.getElementById("menuContainer");
const filters = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let activeCategory = "Todas";

function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function buildFilters() {
  const categories = ["Todas", ...Object.keys(window.MENU_DATA)];
  filters.innerHTML = categories.map(category =>
    `<button class="filter ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`
  ).join("");

  filters.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      buildFilters();
      renderMenu();
    });
  });
}

function renderMenu() {
  const query = normalize(searchInput.value.trim());
  let visibleCount = 0;
  const output = [];

  Object.entries(window.MENU_DATA).forEach(([category, products]) => {
    if (activeCategory !== "Todas" && activeCategory !== category) return;

    const matching = products.filter(([name, price, description]) =>
      normalize(`${name} ${price} ${description} ${category}`).includes(query)
    );

    if (!matching.length) return;
    visibleCount += matching.length;

    output.push(`
      <section class="category-block">
        <div class="category-header">
          <span>${window.MENU_ICONS[category] || "☕"}</span>
          <h3>${category}</h3>
        </div>
        <div class="products-grid">
          ${matching.map(([name, price, description]) => `
            <article class="product">
              <div>
                <h4>${name}</h4>
                ${description ? `<p>${description}</p>` : ""}
              </div>
              <div class="price">${price}</div>
            </article>
          `).join("")}
        </div>
      </section>
    `);
  });

  menuContainer.innerHTML = output.join("");
  emptyState.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", renderMenu);

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

buildFilters();
renderMenu();
