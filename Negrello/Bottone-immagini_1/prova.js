const greetingElement = document.getElementById('saluti');
const changeButton = document.getElementById('change-button');

changeButton.addEventListener('click', () => {
    greetingElement.textContent = 'Hello, JavaScript!';
});