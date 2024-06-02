const operate = () => {
    const divs = document.querySelectorAll('div.btn');
    const screen = document.querySelector('p.displayText');

    let num1;
    let num2;
    let operator = ['+', '-', 'x', '÷']
    let symbol;
    let store = [];
    let store2 = [];
    let toggle = false;
    let answer;

    divs.forEach(div => {
        div.addEventListener('click', (e) => {

            const value = e.target.innerHTML;

            if (!operator.includes(value) && toggle == false) {
                store.push(value);
                num1 = store.join('');
                screen.innerHTML = num1;
            }
            else if (num1 != undefined && toggle == true && value != '=') {
                store2.push(value);
                num2 = store2.join('');
                screen.innerHTML = num1 + ' ' + symbol + ' ' + num2
            }


            if (operator.includes(value)) {
                if (num1 != undefined) {
                    symbol = value;
                    toggle = true;
                    screen.innerHTML = num1 + ' ' + symbol
                } else if (num1 == undefined) {
                    screen.innerHTML = 0;
                }
            }

            if (value == '=') {
                if (symbol == '+') {
                    answer = Math.floor(num1) + Math.floor(num2);
                    screen.innerHTML = answer;
                    store2 = answer;
                    toggle = false;
                }

                if (symbol == '-') {
                    answer = Math.floor(num1) - Math.floor(num2);
                    screen.innerHTML = answer
                    store2 = answer;
                    toggle = false;
                }

                if (symbol == '÷') {
                    answer = Math.floor(num1) / Math.floor(num2);
                    screen.innerHTML = answer
                    store2 = answer;
                    toggle = false;
                }

                if (symbol == 'x') {
                    answer = Math.floor(num1) * Math.floor(num2);
                    screen.innerHTML = answer
                    store2 = answer;
                    toggle = false;
                }
            }

            if (value == 'AC') {
                num1 = undefined;
                num2 = undefined;
                store = [];
                store2 = [];
                toggle = false;
                screen.innerHTML = '0';
            }
        })
    })
}

operate();