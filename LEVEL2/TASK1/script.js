let display = document.getElementById("display");
let calculation = "";

function appendToDisplay(value) {
    const validInput = /^[0-9+\-*/.^%]+$/;
    if (validInput.test(value)) {
        calculation += value;
        display.value = calculation;
    }
}

function clearDisplay() {
    calculation = "";
    display.value = "";
}

function calculate() {
    try {
        calculation = eval(calculation).toString();
        display.value = calculation;
    } catch (error) {
        display.value = "Error";
    }
}

function backspace() {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}

function negate() {
    if (calculation) {
        calculation = calculation.startsWith("-") ? calculation.slice(1) : "-" + calculation;
        display.value = calculation;
    }
}

function reciprocal() {
    try {
        calculation = (1 / eval(calculation)).toString();
        display.value = calculation;
    } catch (error) {
        display.value = "Error";
    }
}

function square() {
    try {
        calculation = (eval(calculation) ** 2).toString();
        display.value = calculation;
    } catch (error) {
        display.value = "Error";
    }
}

function squareRoot() {
    try {
        calculation = Math.sqrt(eval(calculation)).toString();
        display.value = calculation;
    } catch (error) {
        display.value = "Error";
    }
}

function cubeRoot() {
    try {
        calculation = Math.cbrt(eval(calculation)).toString();
        display.value = calculation;
    } catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {
    const keyPressed = event.key;
    const validInput = /^[0-9+\-*/.^%]|Enter|Backspace$/;
    if (!validInput.test(keyPressed)) {
        event.preventDefault();
    }

    if (keyPressed === "Enter") {
        calculate();
    } else if (keyPressed === "Backspace") {
        backspace();
    } else {
        appendToDisplay(keyPressed);
    }
});