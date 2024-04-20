let score = 0;
const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
});
alert('Welcome to Candy Clicker! This game will get updates in the future. I hope you enjoy my first game :)');

