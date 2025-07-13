window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.style.boxShadow = window.scrollY > 50 ? '0 2px 5px rgba(0,0,0,0.2)' : 'none';
});
