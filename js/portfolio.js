// Lightweight project filtering for future enhancements; safely does nothing when filters are absent.
const projectFilters = document.querySelectorAll('[data-project-filter]');
const projectCards = document.querySelectorAll('.project-card');
projectFilters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.projectFilter;
    projectCards.forEach(card => {
      card.hidden = filter && filter !== 'all' && card.dataset.category && card.dataset.category !== filter;
    });
  });
});
