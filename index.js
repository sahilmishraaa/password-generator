const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "~", "`"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



const passwordLength = document.getElementById("length-el");
let hasUpperCase = document.getElementById("uppercase-el");
let hasLowerCase = document.getElementById("lowercase-el");
let hasNumbers = document.getElementById("numbers-el");
let hasSymbols = document.getElementById("symbols-el");

let passwordOne = document.getElementById("password1");
let passwordTwo = document.getElementById("password2");

let copyButtonOne = document.getElementById("copy-btn-el1");
let copyButtonTwo = document.getElementById("copy-btn-el2");

let noCheckboxEl = document.getElementById("no-checkbox-el");

let newPassword = "";

function generateRandomIndex(limit)
{
    let idx = Math.floor(Math.random() * limit);
    return idx;
}

function randomUpperCase()
{
    return upperCase[generateRandomIndex(upperCase.length)];
}
function randomLowerCase()
{
    return lowerCase[generateRandomIndex(lowerCase.length)];
}
function randomNumber()
{
    return numbers[generateRandomIndex(numbers.length)];
}
function randomSymbol()
{
    return symbols[generateRandomIndex(symbols.length)];
}

function generatePassword()
{
    let reqCharacters = [];
    newPassword = "";
    let count = 0;
    if(hasUpperCase.checked)
    {
        reqCharacters.push('u');
        newPassword += randomUpperCase();
        count++;
    }
    if(hasLowerCase.checked)
    {
        reqCharacters.push('l');
        newPassword += randomLowerCase();
        count++;
    }
    if(hasNumbers.checked)
    {
        reqCharacters.push('n');
        newPassword += randomNumber();
        count++;
    }
    if(hasSymbols.checked)
    {
        reqCharacters.push('s');
        newPassword += randomSymbol();
        count++;
    }
    for(let i = count; i < passwordLength.value; i++)
    {
        let idx = generateRandomIndex(reqCharacters.length);
        if(reqCharacters[idx] == 'u')
        {
            newPassword += randomUpperCase();
        }
        else if(reqCharacters[idx] == 'l')
        {
            newPassword += randomLowerCase();
        }
        else if(reqCharacters[idx] == 'n')
        {
            newPassword += randomNumber();
        }
        else
        {
            newPassword += randomSymbol();
        }
    }
    return newPassword;
}


function shufflePassword(str) {
    let arr = str.split("");

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join("");
}

copyButtonOne.addEventListener("click", () => {
    navigator.clipboard.writeText(password1.textContent);
    alert("Password copied!");
});

copyButtonTwo.addEventListener("click", () => {
    navigator.clipboard.writeText(password2.textContent);
    alert("Password copied!");
});

function providePassword()
{
    if(!(hasSymbols.checked) && !(hasNumbers.checked) && !(hasLowerCase.checked) && !(hasUpperCase.checked))
    {
        noCheckboxEl.innerHTML = '<p style = "color: red"> Select at least one checkbox. </p>';
        passwordOne.innerHTML = "";
        passwordTwo.innerHTML = "";
        return;
    }
    if(passwordLength.value > 50)
        passwordLength.value = 50;
    noCheckboxEl.innerHTML = "";
    passwordOne.textContent = shufflePassword(generatePassword());    
    passwordTwo.textContent = shufflePassword(generatePassword());    
}