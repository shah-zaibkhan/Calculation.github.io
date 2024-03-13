function add() {
     const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").innerText = "Result: " + result;
}
    
 function mult() {
       const num1 = parseFloat(document.getElementById("num1").value);
       const num2 = parseFloat(document.getElementById("num2").value);
       const result = num1 * num2;
    document.getElementById("result").innerText = "Result:" + result;
    }
    
    function sub() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    document.getElementById("result").innerText = "Result: " + result;
    }

    function division() {
     const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
     if (num2 == 0) {
    document.getElementById("result").innerText = "Cannot divide by zero!";
    
    } else {
    
    const result = num1 / num2;
    document.getElementById("result").innerText = "Result: " + result;
    }
}