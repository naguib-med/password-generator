const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-{}[]|:;<>?,./';

function getRandomChar(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

function generatePassword() {
    const length = lengthEl.value;
    let availableChars = '';
    let password = '';

    if (uppercaseEl.checked) availableChars += upperCaseChars;
    if (lowercaseEl.checked) availableChars += lowerCaseChars;
    if (numbersEl.checked) availableChars += numberChars;
    if (symbolsEl.checked) availableChars += symbolChars;

    if (availableChars.length === 0) {
        return 'Veuillez sélectionner au moins un critère';
    }

    for (let i = 0; i < length; i++) {
        password += getRandomChar(availableChars);
    }
    passwordEl.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', async () => {
   try {
       await navigator.clipboard.writeText(passwordEl.value);
       alert('Mot de passe copié dans le presse-papier')
   } catch (err) {
       console.error('Erreur lors de la copie du mot de passe : ', err);
       alert('Erreur lors de la copie dans le presse-papier');
   }
})