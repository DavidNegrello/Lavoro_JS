const greetingElement = document.getElementById('greeting');
const changeButton = document.getElementById('change-button');

changeButton.addEventListener('click', () => {
    greetingElement.textContent = 'Hello, JavaScript!';
});