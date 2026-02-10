// Concerts page script (extracted from inline script)
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const filterOptions = document.querySelectorAll('.filter-option');

if (filterBtn && filterDropdown) {
    filterBtn.addEventListener('click', () => {
        filterDropdown.classList.toggle('show');
        filterBtn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-container')) {
            filterDropdown.classList.remove('show');
            filterBtn.classList.remove('active');
        }
    });
}

filterOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const genre = e.target.dataset.genre;
        filterOptions.forEach(opt => opt.classList.remove('selected'));
        e.target.classList.add('selected');
        const cards = document.querySelectorAll('.movie-card');
        cards.forEach(card => {
            if (genre === 'all') {
                card.style.display = '';
            } else {
                const cardGenre = card.dataset.genre || '';
                card.style.display = cardGenre.includes(genre) ? '' : 'none';
            }
        });
    });
});
