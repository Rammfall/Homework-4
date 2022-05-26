let firstnumber = (prompt("Enter first number" ));
const operation = (prompt("Enter operator" ));
let secondnumber = (prompt("Enter second number" ));
let value = Number;

if (isNaN(firstnumber) || isNaN(secondnumber) ){
    alert('Not a number')
}
else {
    firstnumber = Number(firstnumber);
    secondnumber = Number(secondnumber);
    if (operation === '+') {
        value = (firstnumber + secondnumber);
        value = String(value);
        alert(`Ваш результат ${value}`);
    } else if (operation === '-') {
        value = (firstnumber - secondnumber);
        value = String(value);
        alert(`Ваш результат ${value}`);
    } else if (operation === '*') {
        value = (firstnumber * secondnumber);
        value = String(value);
        alert(`Ваш результат ${value}`);
    } else if (operation === '/') {
        value = (firstnumber / secondnumber);
        value = String(value);
        alert(`Ваш результат ${value}`);
    } else {
        alert('Такой операции не существует')
    }
}


