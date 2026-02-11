document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (!faqQuestions) return;

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          if (q.nextElementSibling) q.nextElementSibling.classList.remove('active');
        }
      });

      question.classList.toggle('active');
      if (answer) answer.classList.toggle('active');
    });
  });
});
