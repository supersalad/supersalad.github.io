
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('clicked dropdown toggle');
    btn.parentElement.classList.toggle('open');
  });
});