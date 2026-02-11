// js/movies.js

// ======================
// 1) JSON данные
// ======================
const MOVIES = [
    {
        id: "7lives",
        title: "Семь Жизней",
        genres: ["melodrama"],
        genresLabel: "Мелодрама",
        rating: 9.0,
        age: "16+",
        poster: "../img/movies/7lives.png",
    },
    {
        id: "hunter",
        title: "Хищник: Планета смерти",
        genres: ["action", "thriller"],
        genresLabel: "Боевик • Триллер",
        rating: 7.7,
        age: "18+",
        poster: "../img/movies/hunter.png",
    },
    {
        id: "potop",
        title: "Всемирный потоп",
        genres: ["drama"],
        genresLabel: "Драма",
        rating: 9.3,
        age: "14+",
        ageColor: "blue",
        poster: "../img/movies/potop.png",
    },
    {
        id: "stray",
        title: "Stray Kids: Dominate",
        genres: ["concert"],
        genresLabel: "Фильм • Мюзикл",
        rating: 9.6,
        age: "12+",
        ageColor: "blue",
        poster: "../img/movies/StrayKids.png",
    },
    {
        id: "gromoversi",
        title: "Громовержцы",
        genres: ["action"],
        genresLabel: "Боевик",
        rating: 8.8,
        age: "18+",
        poster: "../img/movies/gromoversi.png",
    },
    {
        id: "28",
        title: "28 лет спустя",
        genres: ["horror"],
        genresLabel: "Ужасы",
        rating: 9.4,
        age: "18+",
        poster: "../img/movies/28mansurov.png",
    },
    {
        id: "dexter",
        title: "Декстер",
        genres: ["thriller"],
        genresLabel: "Триллер",
        rating: 8.5,
        age: "16+",
        poster: "../img/movies/dexter.png",
    },
    {
        id: "puss",
        title: "Кот в Сапогах: Последнее желание",
        genres: ["family", "animation"],
        genresLabel: "Анимация • Семейный",
        rating: 8.2,
        age: "6+",
        poster: "../img/movies/puss.png",
    },
    {
        id: "jinx",
        title: "Аркейн",
        genres: ["drama", "animation"],
        genresLabel: "Драма • Анимация",
        rating: 9.9,
        age: "16+",
        poster: "../img/movies/jinx.png",
    },
];

let currentGenre = "all";
let searchQuery = "";

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

function matchesGenre(movie, genre) {
    if (genre === "all") return true;
    return (movie.genres || []).includes(genre);
}

function matchesSearch(movie, q) {
    if (!q) return true;
    return movie.title.toLowerCase().includes(q.toLowerCase());
}

function movieCardHTML(movie) {
    const genresData = (movie.genres || []).join(",");
    const rating = Number(movie.rating).toFixed(1);
    const rCls = ratingClass(movie.rating);
    const ageCls = movie.ageColor ? ` ${movie.ageColor}` : "";

    return `
    <a href="/pages/movie-detail.html?id=${encodeURIComponent(movie.id)}"
       class="movie-card"
       data-genre="${escapeHtml(genresData)}">
      <div class="poster">
        <span class="rating ${rCls}">${escapeHtml(rating)} ★</span>
        <span class="age${ageCls}">${escapeHtml(movie.age)}</span>
        <img src="${escapeHtml(movie.poster)}" alt="${escapeHtml(movie.title)}">
      </div>
      <h3>${escapeHtml(movie.title)}</h3>
      <p>${escapeHtml(movie.genresLabel)}</p>
    </a>
  `.trim();
}

function ensureEmptyBlock(afterEl) {
    let block = document.getElementById("moviesEmpty");
    if (block) return block;

    block = document.createElement("div");
    block.id = "moviesEmpty";
    block.style.padding = "18px 20px";
    block.style.color = "#6b7280";
    block.style.fontWeight = "700";
    block.style.display = "none";
    block.textContent = "Ничего не найдено.";

    afterEl.insertAdjacentElement("afterend", block);
    return block;
}

function renderMovies() {
    const grid = document.getElementById("moviesGrid") || document.querySelector(".movies-grid");
    if (!grid) return;

    const filtered = MOVIES
        .filter(m => matchesGenre(m, currentGenre))
        .filter(m => matchesSearch(m, searchQuery));

    grid.innerHTML = filtered.map(movieCardHTML).join("\n");

    const empty = ensureEmptyBlock(grid);
    empty.style.display = filtered.length ? "none" : "block";
}

function initFilters() {
    const btn = document.getElementById("filtersBtn") || document.querySelector(".filters");
    const dropdown = document.getElementById("filterDropdown") || document.querySelector(".filter-dropdown");
    const options = dropdown ? Array.from(dropdown.querySelectorAll(".filter-option")) : [];

    if (!btn || !dropdown || !options.length) return;

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("show");
        btn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        const inside = dropdown.contains(e.target) || btn.contains(e.target);
        if (!inside) {
            dropdown.classList.remove("show");
            btn.classList.remove("active");
        }
    });

    options.forEach((opt) => {
        opt.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");

            currentGenre = opt.dataset.genre || "all";
            renderMovies();

            dropdown.classList.remove("show");
            btn.classList.remove("active");
        });
    });
}

function initSearch() {
    const input =
        document.getElementById("movieSearch") ||
        document.querySelector(".navbar__search-input");

    if (!input) return;

    input.addEventListener("input", () => {
        searchQuery = input.value.trim();
        renderMovies();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    initSearch();
    renderMovies();
});
