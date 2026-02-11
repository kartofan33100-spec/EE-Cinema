// js/theatre.js

// ======================
// 1) JSON данные театра
// ======================
const THEATRE = [
    {
        id: 0,
        title: "Невинный обман",
        genres: ["comedy"],
        genresLabel: "комедия",
        rating: 9.0,
        age: "18+",
        ageColor: "",
        poster: "../img/theatre/Obman.png",
    },
    {
        id: 1,
        title: "Поэтический моноспектакль",
        genres: ["drama", "poetry"],
        genresLabel: "драма • поэзия",
        rating: 8.3,
        age: "12+",
        ageColor: "blue",
        poster: "../img/theatre/monospektakl.png",
    },
    {
        id: 2,
        title: "Собачье сердце",
        genres: ["drama"],
        genresLabel: "драма",
        rating: 9.3,
        age: "12+",
        ageColor: "blue",
        poster: "../img/theatre/dogheart.png",
    },
    {
        id: 3,
        title: "Мечта",
        genres: ["art"],
        genresLabel: "арт-спектакль",
        rating: 8.9,
        age: "16+",
        ageColor: "",
        poster: "../img/theatre/mechta.png",
    },
    {
        id: 4,
        title: "Театральная арт-терапия",
        genres: ["experimental"],
        genresLabel: "экспериментальный",
        rating: 9.1,
        age: "16+",
        ageColor: "",
        poster: "../img/theatre/teatral_art.png",
    },
    {
        id: 5,
        title: "Live Blues Kesh",
        genres: ["music"],
        genresLabel: "музыкальное действо",
        rating: 8.7,
        age: "18+",
        ageColor: "",
        poster: "../img/theatre/liveblueskesh.png",
    },
    {
        id: 6,
        title: "Животное",
        genres: ["modern"],
        genresLabel: "современный спектакль",
        rating: 9.4,
        age: "18+",
        ageColor: "",
        poster: "../img/theatre/jivotnoe.png",
    },
    {
        id: 7,
        title: 'Премьера! "Сиротливый зал"',
        genres: ["tragicomedy"],
        genresLabel: "трагикомедия",
        rating: 8.6,
        age: "16+",
        ageColor: "",
        poster: "../img/theatre/sirota.png",
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
function ratingClass(r) {
    if (r >= 8.5) return "green";
    if (r >= 7.0) return "yellow";
    return "red";
}

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
    return (item.genres || []).includes(genre);
}

function matchesSearch(item, q) {
    if (!q) return true;
    return item.title.toLowerCase().includes(q.toLowerCase());
}

function theatreCardHTML(t) {
    const genresData = (t.genres || []).join(",");
    const rating = Number(t.rating).toFixed(1);
    const rCls = ratingClass(t.rating);
    const ageCls = t.ageColor ? ` ${t.ageColor}` : "";

    return `
    <a href="/pages/theatre-detail.html?id=${encodeURIComponent(t.id)}"
       class="movie-card"
       data-genre="${escapeHtml(genresData)}">
      <div class="poster">
        <span class="rating ${rCls}">${escapeHtml(rating)} ★</span>
        <span class="age${ageCls}">${escapeHtml(t.age)}</span>
        <img src="${escapeHtml(t.poster)}" alt="${escapeHtml(t.title)}">
      </div>
      <h3>${escapeHtml(t.title)}</h3>
      <p>${escapeHtml(t.genresLabel)}</p>
    </a>
  `.trim();
}

function ensureEmptyBlock(afterEl) {
    let block = document.getElementById("theatreEmpty");
    if (block) return block;

    block = document.createElement("div");
    block.id = "theatreEmpty";
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
function renderTheatre() {
    const grid = document.getElementById("theatreGrid") || document.querySelector(".movies-grid");
    if (!grid) return;

    const filtered = THEATRE
        .filter(t => matchesGenre(t, currentGenre))
        .filter(t => matchesSearch(t, searchQuery));

    grid.innerHTML = filtered.map(theatreCardHTML).join("\n");

    const empty = ensureEmptyBlock(grid);
    empty.style.display = filtered.length ? "none" : "block";
}

// ======================
// 5) Filters dropdown (если есть на странице)
// HTML должен иметь: #filterBtn, #filterDropdown, .filter-option[data-genre]
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
            renderTheatre();

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
        document.getElementById("theatreSearch") ||
        document.querySelector(".navbar__search-input");

    if (!input) return;

    input.addEventListener("input", () => {
        searchQuery = input.value.trim();
        renderTheatre();
    });
}

// ======================
// 7) Start
// ======================
document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    initSearch();
    renderTheatre();
});
