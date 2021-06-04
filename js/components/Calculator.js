class Calculator {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.buttonsData = [
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

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }