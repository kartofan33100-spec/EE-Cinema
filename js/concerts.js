// js/concerts.js

// ======================
// 1) JSON данные концертов
// ======================
const CONCERTS = [
    {
        id: 0,
        title: "Баста в Астане",
        genre: "rap",
        genreLabel: "Реп",
        price: "от 35 000 ₸",
        age: "16+",
        ageColor: "", // или "blue"
        poster: "../img/concerts/basta (1).png",
    },
    {
        id: 1,
        title: "СЕН - Айқын Төлепберген",
        genre: "national",
        genreLabel: "Национальная музыка",
        price: "от 13 000 ₸",
        age: "12+",
        ageColor: "blue",
        poster: "../img/concerts/sen.png",
    },
    {
        id: 2,
        title: "Пятерка и Меллшер",
        genre: "hiphop",
        genreLabel: "Русский хип-хоп",
        price: "от 5 200 ₸",
        age: "16+",
        ageColor: "",
        poster: "../img/concerts/boss (1).png",
    },
    {
        id: 3,
        title: "Моргенштерн: Мировой тур",
        genre: "classical",
        genreLabel: "Классика",
        price: "от 40 000 ₸",
        age: "16+",
        ageColor: "",
        poster: "../img/concerts/morgenshrent.png",
    },
    {
        id: 4,
        title: "XXXTentacion: Возвращение",
        genre: "blackrap",
        genreLabel: "Американский рэп",
        price: "от 30 500 ₸",
        age: "16+",
        ageColor: "",
        poster: "../img/concerts/xxx.png",
    },
];

// ======================
// 2) State
// ======================
let currentGenre = "all";
let searchQuery = "";

// ======================
// 3) Helpers
// ======================
function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function matchesGenre(item, genre) {
    if (genre === "all") return true;
    return item.genre === genre;
}

function matchesSearch(item, q) {
    if (!q) return true;
    return item.title.toLowerCase().includes(q.toLowerCase());
}

function concertCardHTML(c) {
    const ageCls = c.ageColor ? ` ${c.ageColor}` : "";
    return `
    <a href="/pages/concert-detail.html?id=${encodeURIComponent(c.id)}"
       class="movie-card"
       data-genre="${escapeHtml(c.genre)}">
      <div class="poster">
        <span class="price">${escapeHtml(c.price)}</span>
        <span class="age${ageCls}">${escapeHtml(c.age)}</span>
        <img src="${escapeHtml(c.poster)}" alt="${escapeHtml(c.title)}">
      </div>
      <h3>${escapeHtml(c.title)}</h3>
      <p>${escapeHtml(c.genreLabel)}</p>
    </a>
  `.trim();
}

function ensureEmptyBlock(afterEl) {
    let block = document.getElementById("concertsEmpty");
    if (block) return block;

    block = document.createElement("div");
    block.id = "concertsEmpty";
    block.style.padding = "18px 20px";
    block.style.color = "#6b7280";
    block.style.fontWeight = "700";
    block.style.display = "none";
    block.textContent = "Ничего не найдено.";

    afterEl.insertAdjacentElement("afterend", block);
    return block;
}

// ======================
// 4) Render
// ======================
function renderConcerts() {
    const grid = document.getElementById("concertsGrid") || document.querySelector(".movies-grid");
    if (!grid) return;

    const filtered = CONCERTS
        .filter(c => matchesGenre(c, currentGenre))
        .filter(c => matchesSearch(c, searchQuery));

    grid.innerHTML = filtered.map(concertCardHTML).join("\n");

    const empty = ensureEmptyBlock(grid);
    empty.style.display = filtered.length ? "none" : "block";
}

// ======================
// 5) Dropdown filter (твой, но аккуратнее)
// ======================
function initFilters() {
    const filterBtn = document.getElementById("filterBtn");
    const filterDropdown = document.getElementById("filterDropdown");
    const filterOptions = document.querySelectorAll(".filter-option");

    if (!filterBtn || !filterDropdown || !filterOptions.length) return;

    filterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        filterDropdown.classList.toggle("show");
        filterBtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".filter-container")) {
            filterDropdown.classList.remove("show");
            filterBtn.classList.remove("active");
        }
    });

    filterOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            const genre = e.currentTarget.dataset.genre || "all";

            filterOptions.forEach(opt => opt.classList.remove("selected"));
            e.currentTarget.classList.add("selected");

            currentGenre = genre;
            renderConcerts();

            filterDropdown.classList.remove("show");
            filterBtn.classList.remove("active");
        });
    });
}

// ======================
// 6) Search (опционально: берём navbar input)
// ======================
function initSearch() {
    const input =
        document.getElementById("concertSearch") ||
        document.querySelector(".navbar__search-input");

    if (!input) return;

    input.addEventListener("input", () => {
        searchQuery = input.value.trim();
        renderConcerts();
    });
}

// ======================
// 7) Start
// ======================
document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    initSearch();
    renderConcerts();
});
