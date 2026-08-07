const modal = document.querySelector('#modal');
const openBtn = document.querySelector('#contanctBtn');
const closeBtn = document.querySelector('#closeBtn');
const themeBtn = document.querySelector('#themeBtn');
const themeIcon = document.querySelector('#themeIcon');

function openModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// 배경(오버레이) 클릭 시 닫기 — 안쪽 박스는 제외
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// 다크모드 토글 + 아이콘 모션
function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

themeBtn.addEventListener('click', () => {
  themeBtn.classList.remove('is-spinning');
  void themeBtn.offsetWidth;
  themeBtn.classList.add('is-spinning');
  applyTheme(!document.documentElement.classList.contains('dark'));
});
