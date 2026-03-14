// Simple birthday surprise script

function showGift() {
  const giftDiv = document.getElementById('gift');
  giftDiv.style.display = 'block';

  const questionBox = document.getElementById('questionBox');
  questionBox.style.display = 'none';
}

function checkAnswer() {
  const answer = document.getElementById('answer').value.trim().toLowerCase();

  // Example question: "Hum pehli baar kab mile the?" — Answer: "2022"
  if (answer === '2022') {
    showGift();
  } else {
    alert('Wrong answer! Try again 😜');
  }
}

// Calculate how many years you’ve been together
function calculateYears() {
  const startDate = new Date('2022-01-01');
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();

  // Adjust if current date is before start date anniversary
  const m = now.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < startDate.getDate())) {
    years--;
  }
  document.getElementById('years').innerText = years;
}

// Run when page loads
window.onload = function() {
  calculateYears();
};
