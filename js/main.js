// Minimal JS for demo interactions
document.addEventListener('DOMContentLoaded', function(){
  // future interactive enhancements: map preview, case studies, dynamic project filters
});
document.querySelectorAll('.scroll-down').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
