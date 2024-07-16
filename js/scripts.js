document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-title').forEach(title => {
        title.addEventListener('click', () => {
            const accordion = title.parentElement;
            accordion.classList.toggle('active-accordion');
        });
    });
});
