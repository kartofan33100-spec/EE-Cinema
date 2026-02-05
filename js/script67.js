const banners = [
    {
        tag: "CS 2",
        date: "6/03",
        title: "EMIRKHAN MADIYEV",
        sub: "НОВАЯ ЗВЕЗДА КИБЕРСПОРТА",
        image: "img/i.webp"
    },
    {
        tag: "Кино",
        date: "10/03",
        title: "DUNE: PART TWO",
        sub: "ПРЕМЬЕРА В IMAX",
        image: "img/banners/banner2.jpg"
    },
    {
        tag: "Концерт",
        date: "14/03",
        title: "LIVE SHOW",
        sub: "БОЛЬШОЙ ТУР ПО ГОРОДАМ",
        image: "img/banners/banner3.jpg"
    },
    {
        tag: "Театр",
        date: "18/03",
        title: "HAMLET",
        sub: "КЛАССИКА НА НОВЫЙ ЛАД",
        image: "img/banners/banner4.jpg"
    }
];

const heroImage = document.getElementById("heroImage");
const heroTag = document.getElementById("heroTag");
const heroDate = document.getElementById("heroDate");
const heroTitle = document.getElementById("heroTitle");
const heroSub = document.getElementById("heroSub");

const btnPrev = document.getElementById("heroPrev");
const btnNext = document.getElementById("heroNext");

let index = 0;

function renderBanner(i) {
    const b = banners[i];

    if (heroTag) heroTag.textContent = b.tag ?? "";
    if (heroDate) heroDate.textContent = b.date ?? "";
    if (heroTitle) heroTitle.textContent = b.title ?? "";
    if (heroSub) heroSub.textContent = b.sub ?? "";

    if (heroImage) {
        if (b.image && b.image.trim() !== "") {
            heroImage.style.backgroundImage = `url("${b.image}")`;
        } else {
            heroImage.style.backgroundImage =
                "linear-gradient(180deg, #cfd8df 0%, #e8ecef 55%, #dfe5ea 100%)";
        }
    }
}

function nextBanner() {
    index = (index + 1) % banners.length;
    renderBanner(index);
}

function prevBanner() {
    index = (index - 1 + banners.length) % banners.length;
    renderBanner(index);
}

if (btnNext) btnNext.addEventListener("click", nextBanner);
if (btnPrev) btnPrev.addEventListener("click", prevBanner);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBanner();
    if (e.key === "ArrowLeft") prevBanner();
});

renderBanner(index);
