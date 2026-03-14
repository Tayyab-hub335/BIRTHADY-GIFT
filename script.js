function showGift() {
  const giftDiv = document.getElementById('gift');
  giftDiv.style.display = 'block';

  const questionBox = document.getElementById('questionBox');
  questionBox.style.display = 'none';
}

// Calculate how many years you’ve been together
function calculateYears() {
  const startDate = new Date('2022-01-01');
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();

  const m = now.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < startDate.getDate())) {
    years--;
  }
  document.getElementById('years').innerText = years;
}

window.onload = function() {
  calculateYears();
};
