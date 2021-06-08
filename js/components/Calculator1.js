/*
3. su JS sugeneruoti HTML:
- minimum: klavietūra;
- tobulas: visas objektas
4. spaudžiant su pele ant mygtukų:
- jei skaičius ar operatorius, simbolis yra įtraukiamas/parašomas ekrane
- jei C, tai išvalo ekraną
- jei < (backspace), tai nutrina vieną simbolį (iš galo)
- visi kiti nedaro nieko
*/
class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();
    }

    clear() {
        this.currentText = '';
        this.previousText = '';
        this.operation = undefined;
    }

    delete() {
        this.currentText = this.currentText.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentText.includes('.')) return;      // antro 'kablelio' skaiciuje buti negali
        this.currentText = this.currentText.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentText === '') return;
        if (this.previousText !== '') {
            this.compute();

        }
        this.operation = operation;
        this.previousText = this.currentText;
        this.currentText = '';
    }

    compute() {
        let calculation = 0;
        const prev = parseFloat(this.previousText);
        const current = parseFloat(this.currentText);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case 'x':
                calculation = prev * current;
                break;
            case '/':
                calculation = prev / current;
                break;
            default:
                return;
        }
        this.currentText = calculation;
        this.operation = undefined;
        this.previousText = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay = '';
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentTextElement.innerText = this.getDisplayNumber(this.currentText);
        if (this.operation != null) {
            this.previousTextElement.innerText = `${this.getDisplayNumber(this.previousText)} ${this.operation}`;
            this.currentTextElement.innerText = this.getDisplayNumber(this.currentText);
        } else {
            this.previousTextElement.innerText = '';
        }
    }
}


const numberButtons = document.querySelectorAll('.button.number')
const operationButtons = document.querySelectorAll('.button.operation')
const equalsButton = document.querySelector('.button.red')
const deleteLastButton = document.querySelector('.button.delete')
const clearButton = document.querySelector('.button.clear')
const previousTextElement = document.querySelector('.result')
const currentTextElement = document.querySelector('.action')

const calculator = new Calculator(previousTextElement, currentTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteLastButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

