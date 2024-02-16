let expression = '';

function appendInput(value) {
    expression += value;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = expression;
}