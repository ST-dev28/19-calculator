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

const buttonsData = [
    { title: 'C', color: 'grey' },
    { title: '+/-', color: 'grey' },
    { title: '%', color: 'grey' },
    { title: '/', color: 'dark' },
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '*', color: 'dark' },
    { title: '4' },
    { title: '5' },
    { title: '6' },
    { title: '-', color: 'dark' },
    { title: '7' },
    { title: '8' },
    { title: '9' },
    { title: '+', color: 'dark' },
    { title: '0' },
    { title: '.' },
    { title: '<' },
    { title: '=', color: 'red' },
];

//const keyboardDOM = document.querySelectorAll('.button');
const resultDOM = document.querySelector('.result');
const actionDOM = document.querySelector('.action');
const buttonDOM = document.querySelectorAll('.button');
console.log(actionDOM);
console.log(resultDOM);
//console.log(keyboardDOM);
console.log(buttonDOM);

buttonDOM.addEventListener('click', () => {
    //event.preventDefault();
    for (let i = 0; i < buttonDOM.length; i++) {
        actionDOM.innerText = buttonDOM[i].innerText;
        //actionDOM.innerText = buttonDOM.innerText;  
    }


    //inputDOM.value = '';  //antra karta paspaudus 'submit' istrina teksta
    //console.log(buttonDOM.innerText);
})



