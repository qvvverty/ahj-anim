const collapseBtn = document.querySelector('.collapse-btn');
const collapseContent = document.querySelector('.collapse-content');

collapseBtn.addEventListener('click', () => {
  collapseContent.classList.toggle('hidden');
});
