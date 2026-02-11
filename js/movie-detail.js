const movieData = {
    '7lives': {
        title: 'Семь Жизней',
        poster: '../img/movies/7lives.png',
        description: 'Мелодрама о судьбе и второй жизни. История молодой женщины, которая получает неожиданный шанс начать всё с начала. Фильм исследует глубокие человеческие отношения, потери и возможность прощения. Режиссёр показывает, как каждое наше решение может изменить не только нашу судьбу, но и судьбы близких нам людей. Проникновенная история о любви, боли и надежде на новое начало.',
        reviews: [
            { name: 'CinemaLover_92', date: '08 февраля 2026 г.', rating: 5, text: 'Потрясающий фильм! Мне очень понравилась глубина и эмоциональность истории. Актёры сыграли превосходно, а атмосфера фильма полностью захватила.' },
            { name: 'PixelDreamer', date: '06 февраля 2026 г.', rating: 4, text: 'Хороший фильм, хотя некоторые моменты показались немного затянутыми. Но в целом стоит посмотреть, особенно если вы любите глубокие драмы.' },
            { name: 'SilverScreen_Fox', date: '04 февраля 2026 г.', rating: 5, text: 'Мастерский кинематограф! Каждая сцена, каждый диалог имеет смысл. Это не просто фильм, это философское произведение о жизни и выборе.' },
            { name: 'NeonWatcher', date: '02 февраля 2026 г.', rating: 4, text: 'Очень трогательный фильм. Рекомендую всем, кто ценит качественное кино. Слёзы, смех и надежда - всё это есть в картине.' }
        ]
    },
    'hunter': {
        title: 'Хищник: Планета смерти',
        poster: '../img/movies/hunter.png',
        description: 'Боевик-триллер о выжившем в враждебном космосе охотнике. После крушения космического корабля герой остаётся один на неизведанной планете, полной опасностей. Фильм полон интенсивных боевых сцен, погонь и напряжённых моментов выживания. Зрители увидят отчаянную борьбу за жизнь, где каждый выбор может быть последним. Масштабная космическая эпопея с невероятными спецэффектами.',
        reviews: [
            { name: 'ActionJunkie_88', date: '07 февраля 2026 г.', rating: 5, text: 'Адреналин на максимум! Отличный боевик с потрясающими спецэффектами. Напряжение не отпускает ни на минуту!' },
            { name: 'FilmBuff_007', date: '05 февраля 2026 г.', rating: 4, text: 'Хороший экшн-фильм. Главный герой убедительно играет роль выжившего. Спецэффекты просто класс!' },
            { name: 'SkyRider_42', date: '03 февраля 2026 г.', rating: 5, text: 'Это то, что нужно после долгого дня! Потрясающие сцены боёв, красивая планета и драматичная история. Смотрел на краю кресла.' },
            { name: 'CloudDancer', date: '01 февраля 2026 г.', rating: 3, text: 'Фильм хороший, но местами предсказуем. В целом развлекательный боевик, который стоит посмотреть фанатам жанра.' }
        ]
    },
    'potop': {
        title: 'Всемирный потоп',
        poster: '../img/movies/potop.png',
        description: 'Драма о людях, переживающих катастрофу эпохальных масштабов. Когда на Землю обрушивается стихийное бедствие, различные люди из разных слоёв общества вынуждены объединиться для выживания. Фильм показывает, как экстремальные ситуации раскрывают истинные черты характера человека. История о том, как в самые тёмные моменты люди находят в себе силы помогать друг другу и верить в спасение.',
        reviews: [
            { name: 'EchoMaster_99', date: '09 февраля 2026 г.', rating: 5, text: 'Масштабное и впечатляющее кино! Фильм показывает, как люди способны объединяться перед лицом опасности. Очень достойная картина.' },
            { name: 'NightOwl_TV', date: '07 февраля 2026 г.', rating: 4, text: 'Хорошая драма с элементами катастрофы. Актёры играют убедительно, а сюжет держит в напряжении.' },
            { name: 'VortexCinema', date: '05 февраля 2026 г.', rating: 4, text: 'Фильм оставил глубокое впечатление. Это не просто про катастрофу, это про человечность и солидарность.' },
            { name: 'LumaLights_77', date: '03 февраля 2026 г.', rating: 5, text: 'Потрясающе! Визуально красиво, сценарий хорошо продуман. Обязателен к просмотру!' }
        ]
    },
    'stray': {
        title: 'Stray Kids: Dominate',
        poster: '../img/movies/StrayKids.png',
        description: 'Фильм-концерт с легендарной южнокорейской группой STRAY KIDS. Уникальное кинематографическое событие, объединяющее энергию живого выступления с профессиональной кинопроизводством. Зрители смогут насладиться мировыми хитами группы в кинотеатре с идеальным звуком и видео. Концерт наполнен красочными танцевальными номерами, специальными эффектами и эмоциональными моментами. Идеальное развлечение для всех поклонников STRAY KIDS и K-pop музыки.',
        reviews: [
            { name: 'PixelQueen_99', date: '08 февраля 2026 г.', rating: 5, text: 'Просто невероятно! Энергия, которую вы чувствуете в кинотеатре - это не описать словами. Спасибо за такой подарок для поклонников!' },
            { name: 'ThunderVibe', date: '06 февраля 2026 г.', rating: 5, text: 'Потрясающий концерт! Звук, видео, танцы - всё на высшем уровне. Музыканты как всегда зажигают!' },
            { name: 'CosmoFilm_86', date: '04 февраля 2026 г.', rating: 5, text: 'Я была в восторге! Это был лучший концертный фильм из всех, что я видела. Красивая операторская работа, отличный сет песен.' },
            { name: 'NetflixGhost', date: '02 февраля 2026 г.', rating: 4, text: 'Очень хороший фильм! Понравилось всё, кроме того, что некоторые моменты были слишком быстро смонтированы.' }
        ]
    },
    'gromoversi': {
        title: 'Громовержцы',
        poster: '../img/movies/gromoversi.png',
        description: 'Боевик о команде супергероев, спасающих мир от глобальной угрозы. Когда древняя сила пробуждается и угрожает человечеству, группа необычных людей с суперспособностями должна объединиться. Фильм полон зрелищных боевых сцен, впечатляющей адреналина и юмора. История о дружбе, жертве и единстве в борьбе против зла. Грандиозный экшн с эффектными трансформациями и невероятными силами супергеройской команды.',
        reviews: [
            { name: 'ChromaView_55', date: '07 февраля 2026 г.', rating: 5, text: 'Отличный супергеройский фильм! Боевые сцены впечатляют, визуальные эффекты на высоте. Юмор тоже присутствует - прекрасный баланс!' },
            { name: 'SonicDream', date: '05 февраля 2026 г.', rating: 4, text: 'Хороший боевик с деньгами, потраченными не зря. Команда героев интересная, но может быть развития персонажей могло быть больше.' },
            { name: 'PlexusGaze', date: '03 февраля 2026 г.', rating: 5, text: 'Просто супер! Классный фильм для всей семьи. Дети смотрели с открытыми ртами, прелесть!' },
            { name: 'VertexLight_33', date: '01 февраля 2026 г.', rating: 4, text: 'Неплохой экшн. Для любителей жанра - пять звёзд. Спецэффекты реально красивые.' }
        ]
    },
    '28': {
        title: '28 лет спустя',
        poster: '../img/movies/28mansurov.png',
        description: 'Ужасы о выжившем в заражённом городе спустя долгие годы после апокалипсиса. Главный герой вынужден перемещаться по постапокалиптическому ландшафту среди мутировавших существ и других выживших. Фильм создаёт атмосферу постоянного страха и неизвестности. Зрители испытают волнение от неожиданных поворотов сюжета и интенсивных моментов борьбы за жизнь. Мрачная история о человеческой стойкости и надежде в безнадёжном мире.',
        reviews: [
            { name: 'ShadowViewer_44', date: '06 февраля 2026 г.', rating: 5, text: 'Страшный фильм! В хорошем смысле. Атмосфера апокалипсиса передана идеально. Хорошая работа режиссёра.' },
            { name: 'PurpleScreen_88', date: '04 февраля 2026 г.', rating: 4, text: 'Интересный постапокалиптический фильм. Напрягает, как и положено для этого жанра. Рекомендую любителям триллеров.' },
            { name: 'ArcticWatcher', date: '02 февраля 2026 г.', rating: 4, text: 'Фильм хороший, но местами слишком мрачный. Для людей с крепкими нервами точно подойдёт.' },
            { name: 'NovaLight_66', date: '31 января 2026 г.', rating: 5, text: 'Мастерство и ужас в одном! Один из лучших фильмов в жанре. Не могла оторваться.' }
        ]
    },
    'dexter': {
        title: 'Декстер',
        poster: '../img/movies/dexter.png',
        description: 'Триллер о сложном человеке, живущем двойной жизнью. Главный герой скрывает свои тёмные тайны за маской нормального образа жизни, работая судебным экспертом днём и охотником на преступников ночью. Фильм захватывает психологическими закрутками, непредсказуемыми поворотами и напряжённой атмосферой. История исследует границы морали и справедливости через глаза уникального антигероя. Интенсивный психологический триллер, который держит в напряжении от начала до конца.',
        reviews: [
            { name: 'OmegaView', date: '05 февраля 2026 г.', rating: 5, text: 'Психологический шедевр! Главный герой неоднозначен, и это делает фильм по-настоящему интересным. Держит в напряжении до самого конца.' },
            { name: 'ZenithCinema', date: '03 февраля 2026 г.', rating: 5, text: 'Отличный триллер! История захватывает с первых минут. Персонаж главного героя - один из лучших в кино.' },
            { name: 'NebulaDreamer', date: '01 февраля 2026 г.', rating: 4, text: 'Хороший психологический боевик. Местами предсказуем, но в целом смотрится на одном дыхании.' },
            { name: 'VortexGaze_77', date: '30 января 2026 г.', rating: 5, text: 'Это искусство! Фильм заставляет думать, предполагать, он морально неоднозначен. Просто класс!' }
        ]
    },
    'puss': {
        title: 'Кот в Сапогах: Последнее желание',
        poster: '../img/movies/puss.png',
        description: 'Весёлая и трогательная анимационная сказка о приключениях хитрого кота. Когда кот обнаруживает ещё один способ повлиять на собственную судьбу, он отправляется в опасное путешествие, чтобы обрести своё последнее желание. Фильм наполнен юмором для всей семьи, красивыми анимационными сценами и трогательными моментами дружбы. История о силе дружбы, смелости и поиске смысла жизни. Яркое семейное развлечение с элементами приключений и романтики.',
        reviews: [
            { name: 'SunsetViewer_51', date: '04 февраля 2026 г.', rating: 5, text: 'Прекрасный мультфильм для всей семьи! Смешной, трогательный и красиво анимирован. Дети от него в восторге!' },
            { name: 'NeonPixel', date: '02 февраля 2026 г.', rating: 5, text: 'Кот в Сапогах - легенда! Этот фильм не менее хорош, чем первые части. Веселье гарантировано.' },
            { name: 'CosmicWatcher_22', date: '31 января 2026 г.', rating: 4, text: 'Хороший семейный фильм. Юмор нравится и детям, и взрослым. Рекомендую к просмотру!' },
            { name: 'StardustFilm', date: '29 января 2026 г.', rating: 5, text: 'Я смеялся, как ребёнок! Отличное развлечение и прекрасная история про дружбу.' }
        ]
    },
    'jinx': {
        title: 'Аркейн',
        poster: '../img/movies/jinx.png',
        description: 'Драма-сериал о сложных отношениях и магии в антиутопическом городе. История двух сестёр, разделённых классовыми различиями и магическими силами, которые их связывают и разделяют. Фильм исследует темы предательства, мести, любви и искупления. Каждая сцена наполнена динамикой, глубокой характеристикой персонажей и потрясающей визуальной стилизацией. Эпическая сага о паре сестёр, чьи судьбы переплетены в битве добра и зла.',
        reviews: [
            { name: 'LunaScreener_44', date: '03 февраля 2026 г.', rating: 5, text: 'Это не просто фильм, это произведение искусства! Визуально красиво, сценарий глубокий. История двух главных персонажей очень трогательна.' },
            { name: 'QuantumView', date: '01 февраля 2026 г.', rating: 5, text: 'Это шедевр! Музыка, графика, история - всё идеально. Одна из лучших работ за последние годы.' },
            { name: 'VoidWatcher_88', date: '30 января 2026 г.', rating: 4, text: 'Очень хороший сериал! Местами напряженно, местами грустно, но обязательно смотреть.' },
            { name: 'EchoFilm_99', date: '28 января 2026 г.', rating: 5, text: 'Потрясающий визуальный стиль и невероятная история. Это действительно высокое искусство в анимации.' }
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id') || '7lives';
const movie = movieData[movieId] || movieData['7lives'];

const titleEl = document.getElementById('movieTitle');
const posterEl = document.getElementById('moviePoster');
const descEl = document.getElementById('movieDescription');

if (titleEl) titleEl.textContent = movie.title;
if (posterEl) posterEl.src = movie.poster;
if (descEl) descEl.textContent = movie.description;

function loadReviews(reviews) {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const initials = review.name.split(' ').map(n => n[0]).join('').toUpperCase();
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        const reviewHTML = `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-author">
                        <div class="review-avatar">${initials}</div>
                        <div class="review-author-info">
                            <h4>${review.name}</h4>
                            <p class="review-source">Пользователь EE Cinema</p>
                        </div>
                    </div>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">${stars}</div>
                <p class="review-text">${review.text}</p>
            </div>
        `;
        reviewsContainer.innerHTML += reviewHTML;
    });
}

if (movie.reviews) {
    loadReviews(movie.reviews);
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

const byTimeBtn = document.getElementById('byTimeBtn');
const byCinemaBtn = document.getElementById('byCinemaBtn');
const cinemaView = document.getElementById('cinemaView');

if (byTimeBtn && byCinemaBtn && cinemaView) {
    cinemaView.classList.add('hidden');
    
    byTimeBtn.addEventListener('click', () => {
        const timeView = document.getElementById('timeView');
        if (timeView) timeView.classList.remove('hidden');
        if (cinemaView) cinemaView.classList.add('hidden');
        byTimeBtn.classList.add('active');
        byCinemaBtn.classList.remove('active');
    });

    byCinemaBtn.addEventListener('click', () => {
        const timeView = document.getElementById('timeView');
        if (timeView) timeView.classList.add('hidden');
        if (cinemaView) cinemaView.classList.remove('hidden');
        byTimeBtn.classList.remove('active');
        byCinemaBtn.classList.add('active');
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterType = btn.textContent.trim();
        const rows = document.querySelectorAll('.showtimes-table tbody tr');

        rows.forEach(row => {
            const timeStr = row.getAttribute('data-time');
            if (!timeStr) return;

            const [hours] = timeStr.split(':').map(Number);

            let show = false;
            if (filterType === 'Все') {
                show = true;
            } else if (filterType === 'Дневные') {
                show = hours < 18;
            } else if (filterType === 'Вечерние') {
                show = hours >= 18;
            }

            row.style.display = show ? '' : 'none';
        });
    });
});
