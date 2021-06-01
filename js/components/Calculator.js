class Calculator {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.buttonsData = [
            { title: 'C', color: 'grey' },
            { title: '+/-', color: 'grey' },
            { title: '%', color: 'grey' },
            { title: '/', color: 'dark' },
            { title: '1', color: 'white' },
            { title: '2', color: 'white' },
            { title: '3', color: 'white' },
            { title: '*', color: 'dark' },
            { title: '4', color: 'white' },
            { title: '5', color: 'white' },
            { title: '6', color: 'white' },
            { title: '-', color: 'dark' },
            { title: '7', color: 'white' },
            { title: '8', color: 'white' },
            { title: '9', color: 'white' },
            { title: '+', color: 'dark' },
            { title: '0', color: 'white' },
            { title: '.', color: 'white' },
            { title: '<', color: 'white' },
            { title: '=', color: 'red' },
        ];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    render() {
        let HTML = '';

        this.DOM.innerHTML = HTML;
    }
}

export { Calculator }
