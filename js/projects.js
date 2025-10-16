// Optional: add hover effect or modal/lightbox
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      alert('Project clicked! You can replace this with a modal or lightbox.');
    });
  });
});
