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

const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');
