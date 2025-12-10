// Show selected game
function showGame(gameId) {
  document.querySelectorAll('.game').forEach(game => {
    game.style.display = 'none';
  });
  document.getElementById(gameId).style.display = 'block';

  if (gameId === 'math') initMath();
}

// ---------- Math Challenge ----------
let num1, num2, correctAnswer;

function initMath() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  correctAnswer = num1 + num2;

  document.getElementById('mathQuestion').textContent =
    `What is ${num1} + ${num2}?`;
  document.getElementById('mathAnswer').value = '';
  document.getElementById('mathMessage').textContent = '';
}

function checkMath() {
  const answer = Number(document.getElementById('mathAnswer').value);
  const msg = document.getElementById('mathMessage');

  if (answer === correctAnswer) {
    msg.textContent = "✅ Correct!";
    msg.style.color = "green";
  } else {
    msg.textContent = "❌ Wrong, try again.";
    msg.style.color = "red";
  }
}

// ---------- Fruit Pick Game ----------
function pickFruit() {
  const fruit = document.getElementById('fruitSelect').value;
  const msg = document.getElementById('switchMessage');

  if (!fruit) {
    msg.textContent = "❗ Please pick a fruit.";
    msg.style.color = "red";
    return;
  }

  switch (fruit) {
    case "apple":
      msg.textContent = "🍎 Apple is crunchy and sweet!";
      break;
    case "banana":
      msg.textContent = "🍌 Banana gives energy!";
      break;
    case "orange":
      msg.textContent = "🍊 Orange is rich in Vitamin C!";
      break;
    case "grape":
      msg.textContent = "🍇 Grapes are small and tasty!";
      break;
    case "strawberry":
      msg.textContent = "🍓 Strawberry is juicy and sweet!";
      break;
    case "pineapple":
      msg.textContent = "🍍 Pineapple is tropical and tangy!";
      break;
    case "cherry":
      msg.textContent = "🍒 Cherry is small and nutritious!";
      break;
  }

  msg.style.color = "green";
}

// ---------- Guess the Number ----------
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

document.getElementById('count').addEventListener('click', () => {
  const guess = Number(document.getElementById('numInput').value);
  const result = document.getElementById('countResult');

  if (guess < 1 || guess > 100) {
    result.textContent = "Enter a number from 1 to 100.";
    result.style.color = "red";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    result.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    result.style.color = "green";
  } else if (attempts >= maxAttempts) {
    result.textContent = `❌ Game over! Number was ${secretNumber}.`;
    result.style.color = "red";
  } else if (guess < secretNumber) {
    result.textContent = `Too low! Attempt ${attempts}/${maxAttempts}`;
    result.style.color = "orange";
  } else {
    result.textContent = `Too high! Attempt ${attempts}/${maxAttempts}`;
    result.style.color = "orange";
  }
});

document.getElementById('clearCount').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('numInput').value = '';
  document.getElementById('countResult').textContent = "Game reset!";
});
