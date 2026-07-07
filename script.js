
const numberInput = document.getElementById('numberInput');
const calcBtn = document.getElementById('calcBtn');
const calcResult = document.getElementById('calcResult');
calcBtn.addEventListener('click', () => {
    const value = parseFloat(numberInput.value);
    if (isNaN(value)) {
        calcResult.innerHTML = `<p class="error">Будь ласка, введіть коректне число!</p>`;
        return;
    }
    const square = value ** 2;         
    const cube = value ** 3;           
    const remainder = value % 5;       

    calcResult.innerHTML = `
        <p><strong>Результати для числа ${value}:</strong></p>
        <p>Квадрат: ${square}</p>
        <p>Куб: ${cube}</p>
        <p>Залишок від ділення на 5: ${remainder}</p>
    `;
});


const evenOddResult = document.getElementById('evenOddResult');

function isEven(num) {
    return num % 2 === 0;
}

function checkNumbers() {
    let htmlContent = '';
    for (let i = 1; i <= 10; i++) {
        if (isEven(i)) {
            htmlContent += `<p class="even">Число ${i} — <strong>парне</strong></p>`;
        } else {
            htmlContent += `<p class="odd">Число ${i} — <strong>непарне</strong></p>`;
        }
    }
    evenOddResult.innerHTML = htmlContent;
}
checkNumbers();

const changeColorBtn = document.getElementById('changeColorBtn');
const colors = ["red", "blue", "green", "yellow", "purple"];
let currentColorIndex = 0;

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
