const a = 1;
let b = 2;

const some_function = (number1, number2) => {
    number1 = 100;
    number2 = 200;
}

console.log(a, b);

some_function(a, b)

console.log(a, b);

if (true) {
    var c = 300;
}

console.log(a, b, c);

