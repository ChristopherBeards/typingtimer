window.addEventListener('load', init);

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};

// To change level
let currentLevel = levels.easy;

// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');

const words = [
  'developer',
  'test',
  'buddha',
  'siblings',
  'zen',
  'setState',
  'vanilla',
  'javascript',
  'react',
  'node',
  'express',
  'vue',
  'django',
  'pizza',
  'health',
  'cheese',
  'asdf',
  'whoops',
  'making',
  'all',
  'of',
  'this',
  'up',
  'as',
  'I',
  'go',
  'query',
  'selector',
  'cascading',
  'hyper',
  'relaxed',
  'because',
  'hypnagogic',
  'philtrum',
  'pogonotrophy',
  'darkle',
  'cancatervate',
  'concatenate',
];

// Initialize Game
function init() {
  // Shoe number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load random word from array
  showWord(words);
  // Check word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countDown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Choose & display a random word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countDown() {
  // Make sure time has not run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  // Show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over';
    score = -1;
  }
}

// Choose difficulty
easy.addEventListener('click', chooseDifficulty);
medium.addEventListener('click', chooseDifficulty);
hard.addEventListener('click', chooseDifficulty);

function chooseDifficulty(event) {
  if (event.target.id === 'easy') {
    currentLevel = levels.easy;
    seconds.innerHTML = currentLevel;
  }
  if (event.target.id === 'medium') {
    currentLevel = levels.medium;
    seconds.innerHTML = currentLevel;
  }
  if (event.target.id === 'hard') {
    currentLevel = levels.hard;
    seconds.innerHTML = currentLevel;
  }
}
