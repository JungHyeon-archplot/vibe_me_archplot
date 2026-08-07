const modal = document.querySelector('#modal');
const openBtn = document.querySelector('#contanctBtn');
const closeBtn = document.querySelector('#closeBtn');

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
