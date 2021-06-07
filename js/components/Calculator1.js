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
    constructor(actionScreen, resultScreen) {
        this.actionScreen = actionScreen;
        this.resultScreen = resultScreen;
        this.clear();

    }
//panaikinti viska, kas parasyta abiejuose languose
    clear() {
        this.actionScreen = '';
        this.resultScreen = '';
        this.operation = undefined; // jei istrinam, nera jokio pasirinkimo
    }

    delete () {


    }

    appendNumber (number) {
       if (number === '.' && this.actionScreen.includes('.')) return;
        //verciam i stringa, kad pvz sudetis butu 1+1=2, bet ne 1+1=11
        this.actionScreen = this.actionScreen.toString() + number.toString(); 
    }

    operationChoise (operation) {
        if (this.actionScreen === '') return;
        if (this.resultScreen !== '') {
            this.calculation();
        }
        this.operation = operation;
        this.resultScreen = this.actionScreen;
        this.actionScreen = '';
    }

    calculation () {
        let calculating
        const prev = parseFloat(this.resultScreen);
        const current = parseFloat(this.actionScreen);
        if(isNaN(prev) || isNaN(current)) return;

    }
    displayUpdate () {
        this.actionScreen.innerText = this.actionScreen;
    }
}


const numberButtons = document.querySelectorAll('.button.number');
//console.log(numberButtons);
const operationButtons = document.querySelectorAll('.button.operation');
//console.log(operationButtons);
const equalButtons = document.querySelector('.button.red');
//console.log(equalButtons);
const clearButtons = document.querySelector('.button.clear');
//console.log(clearButtons);
const deleteButtons = document.querySelector('.button.delete');
const actionScreen = document.querySelector('.action');
const resultScreen = document.querySelector('.result');

const calculator = new Calculator(actionScreen, resultScreen);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.displayUpdate();
    })    
});
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.oprationChoise(button.innerText);
        calculator.displayUpdate();
    })    
});
