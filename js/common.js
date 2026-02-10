document.addEventListener('DOMContentLoaded', () => {
  // page enter animation
  try {
    document.body.classList.add('page-enter');
    setTimeout(()=> document.body.classList.remove('page-enter'), 380);
  } catch (e) {}

  // category links transition (applies where .cats exists)
  try {
    document.querySelectorAll('.cats a').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href) return;
        e.preventDefault();
        document.body.classList.add('page-exit');
        setTimeout(()=> window.location.href = href, 320);
      });
    });
  } catch (e) {}
});
