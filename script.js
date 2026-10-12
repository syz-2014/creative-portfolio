document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');
  const hero = document.querySelector('.hero');

  if (nav && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('nav-visible', !entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-45px 0px 0px 0px' }
    );
    observer.observe(hero);
  }
});
