//document.querySelector(".box")//will select the first element that is read on the code


function mathSum (){
    const sum = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    return sum;
}

function mathSubtract () {
    const sum = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    return sum;
}

function mathMultiply () {
    const sum = Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
    return sum;
}
function mathDivide() {
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);

    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

    function handleSubmit(event) {
        event.preventDefault();

        const operation = document.getElementById("operation").value;

        if (operation === "add") {
            document.querySelector("#special").innerHTML = mathSum();
        }

        if (operation === "subtract") {
            document.querySelector("#special").innerHTML = mathSubtract();
        }

        if (operation === "multiply") {
            document.querySelector("#special").innerHTML = mathMultiply();
        }

        if (operation === "divide") {
            document.querySelector("#special").innerHTML = mathDivide();
        }
    }




