// Show selected game
function showGame(gameId) {
  const games = document.querySelectorAll('.game');
  games.forEach(game => game.style.display = 'none');
  document.getElementById(gameId).style.display = 'block';
  
  if (gameId === 'math') initMath();
}

// ---------- Math Challenge ----------
let num1, num2, correctAnswer;

function initMath() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  correctAnswer = num1 + num2;
  document.getElementById('mathQuestion').innerText = `What is ${num1} + ${num2}?`;
  document.getElementById('mathMessage').innerText = '';
  document.getElementById('mathAnswer').value = '';
}

function checkMath() {
  const playerAnswer = parseInt(document.getElementById('mathAnswer').value);
  if (playerAnswer === correctAnswer) {
    document.getElementById('mathMessage').innerText = "Correct! 🎉";
    document.getElementById('mathMessage').style.color = "green";
  } else {
    document.getElementById('mathMessage').innerText = "Wrong! Try again.";
    document.getElementById('mathMessage').style.color = "red";
  }
}

// ---------- Switch Game ----------
function guessFruit() {
  const fruit = document.getElementById('fruitInput').value.toLowerCase();
  let message;
  switch(fruit) {
    case "apple":
      message = "🍎 Apples are crunchy and sweet!";
      break;
    case "banana":
      message = "🍌 Bananas are soft and full of energy!";
      break;
    case "orange":
      message = "🍊 Oranges are juicy and full of vitamin C!";
      break;
    case "grape":
      message = "🍇 Grapes are small but tasty!";
      break;
    default:
      message = "❌ That’s not on the list!";
  }
  document.getElementById('switchMessage').innerText = message;
}

// ---------- Guess Number Game ----------
const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');
const clearCountBtn = document.getElementById('clearCount');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let maxAttempts = 10;

numInputBtn.addEventListener('click', () => {
    const guess = Number(num.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDiv.textContent = 'Please enter a valid number (1–100).';
        resultDiv.style.color = 'crimson';
        return;
    }

    let output = '';

    // For loop counts the attempts
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        if (guess === secretNumber) {
            output = `🎉 Correct! The secret number was ${secretNumber}. You guessed it in ${attempt} attempt(s).`;
            resultDiv.style.color = 'green';
            break;
        } else if (guess < secretNumber) {
            output = `Too low! Attempt #${attempt}`;
            resultDiv.style.color = 'orange';
            break;
        } else {
            output = `Too high! Attempt #${attempt}`;
            resultDiv.style.color = 'orange';
            break;
        }

        if (attempt === maxAttempts) {
            output = `❌ Game over! The secret number was ${secretNumber}.`;
            resultDiv.style.color = 'red';
        }
    }

    resultDiv.textContent = output;
});

// Reset button
clearCountBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    num.value = '';
    resultDiv.textContent = 'Game reset! Start guessing again.';
    resultDiv.style.color = 'blue';
});

 