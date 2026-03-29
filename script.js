const display = document.getElementById('display');

 function appendtoDisplay(input) {
    display.style.color = 'aliceblue';
    display.value += input;
    
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        display.style.color = 'orange';
    } catch (error) {
        display.value = 'Syntax Error';
        display.style.color = 'red';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}   

// Listen for any keydown event on the whole document
document.addEventListener('keydown', (event) => {
    const key = event.key; 
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        appendtoDisplay(key);
    }
    else if (key === 'Enter') {
        event.preventDefault(); 
        calculate();
    }
    else if (key === 'Escape') {
        clearDisplay();
    }
    else if (key === 'Backspace') {
        backspace();
    }
});
