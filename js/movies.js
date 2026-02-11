// js/movies.js

// ====== 1) JSON данные (массив объектов) ======
const MOVIES = [
  {
    id: "7lives",
    title: "Семь Жизней",
    genres: ["melodrama"],
    genresLabel: "Мелодрама",
    rating: 9.0,
    age: "16+",
    poster: "../img/movies/7lives.png"
  },
  {
    id: "hunter",
    title: "Хищник: Планета смерти",
    genres: ["action", "thriller"],
    genresLabel: "Боевик • Триллер",
    rating: 7.7,
    age: "18+",
    poster: "../img/movies/hunter.png"
  },
  {
    id: "potop",
    title: "Всемирный потоп",
    genres: ["drama"],
    genresLabel: "Драма",
    rating: 9.3,
    age: "14+",
    ageColor: "blue", // опционально
    poster: "../img/movies/potop.png"
  },
  {
    id: "stray",
    title: "Stray Kids: Dominate",
    genres: ["concert"],
    genresLabel: "Фильм • Мюзикл",
    rating: 9.6,
    age: "12+",
    ageColor: "blue",
    poster: "../img/movies/StrayKids.png"
  },
  {
    id: "gromoversi",
    title: "Громовержцы",
    genres: ["action"],
    genresLabel: "Боевик",
    rating: 8.8,
    age: "18+",
    poster: "../img/movies/gromoversi.png"
  },
  {
    id: "28",
    title: "28 лет спустя",
    genres: ["horror"],
    genresLabel: "Ужасы",
    rating: 9.4,
    age: "18+",
    poster: "../img/movies/28mansurov.png"
  },
  {
    id: "dexter",
    title: "Декстер",
    genres: ["thriller"],
    genresLabel: "Триллер",
    rating: 8.5,
    age: "16+",
    poster: "../img/movies/dexter.png"
  },
  {
    id: "puss",
    title: "Кот в Сапогах: Последнее желание",
    genres: ["family", "animation"],
    genresLabel: "Анимация • Семейный",
    rating: 8.2,
    age: "6+",
    poster: "../img/movies/puss.png"
  },
  {
    id: "jinx",
    title: "Аркейн",
    genres: ["drama", "animation"],
    genresLabel: "Драма • Анимация",
    rating: 9.9,
    age: "16+",
    poster: "../img/movies/jinx.png"
  }
];

function ratingClass(rating) {
  if (rating >= 8.5) return "green";
  if (rating >= 7.0) return "yellow";
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

function movieCardHTML(movie) {
  const genresForData = (movie.genres ?? []).join(",");
  const rating = typeof movie.rating === "number" ? movie.rating.toFixed(1) : "";
  const ratingCls = ratingClass(movie.rating);
  const ageCls = movie.ageColor ? ` ${movie.ageColor}` : "";

  return `
    <a href="/pages/movie-detail.html?id=${encodeURIComponent(movie.id)}"
       class="movie-card"
       data-genre="${escapeHtml(genresForData)}">

      <div class="poster">
        <span class="rating ${ratingCls}">${escapeHtml(rating)} ★</span>
        <span class="age${ageCls}">${escapeHtml(movie.age)}</span>
        <img src="${escapeHtml(movie.poster)}" alt="${escapeHtml(movie.title)}">
      </div>

      <h3>${escapeHtml(movie.title)}</h3>
      <p>${escapeHtml(movie.genresLabel)}</p>
    </a>
  `.trim();
}

function renderMovies(list) {
  const grid = document.getElementById("moviesGrid") || document.querySelector(".movies-grid");
  if (!grid) return;

  grid.innerHTML = list.map(movieCardHTML).join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  renderMovies(MOVIES);
});
