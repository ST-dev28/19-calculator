class Calculator {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.buttonsData = [
            { title: 'C', color: 'light' },
            { title: '+/-', color: 'light' },
            { title: '%', color: 'light' },
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

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    render() {
        const HTML = `<div class="calculator">
                        <div class="screen">
                            <div class="result">7777</div>
                            <div class="action">7000+700+70+7</div>
                        </div>
                        <div class="keyboard">
                            <div class="button light">C</div>
                            <div class="button light">+/-</div>
                            <div class="button light">%</div>
                            <div class="button dark">/</div>
                            <div class="button">1</div>
                            <div class="button">2</div>
                            <div class="button">3</div>
                            <div class="button dark">x</div>
                            <div class="button">4</div>
                            <div class="button">5</div>
                            <div class="button">6</div>
                            <div class="button dark">-</div>
                            <div class="button">7</div>
                            <div class="button">8</div>
                            <div class="button">9</div>
                            <div class="button dark">+</div>
                            <div class="button">0</div>
                            <div class="button">.</div>
                            <div class="button">&lt;</div>
                            <div class="button red">=</div>
                        </div>
                    </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Calculator }
