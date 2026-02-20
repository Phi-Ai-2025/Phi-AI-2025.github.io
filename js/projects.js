// ===========================
// Project Filter
// ===========================
(function () {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(function (card) {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    var categories = card.getAttribute('data-category');
                    card.style.display = categories.includes(filterValue) ? 'block' : 'none';
                }
            });
        });
    });
})();
