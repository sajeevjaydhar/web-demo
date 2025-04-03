const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');
const bar = document.getElementById('bar');
if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  });
}
if (close) {
  closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}
