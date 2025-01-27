document.addEventListener("DOMContentLoaded", function(){
// задача 1
let age = prompt("Введите ваш возраст")
if (age < 65){
    console.log("Вам ещё рано на пенсию")
}
else {
    console.log("Поздравляем с пенсионным возрастом!")
}

// задача 2
let firstNumber = prompt("Введите первое число")
let secondNumber = prompt("Введите второе число")
if (firstNumber < secondNumber){
    console.log("Первое число больше")
}
else if (secondNumber < firstNumber){
    console.log("Второе число больше")
}
else if (secondNumber === firstNumber){
    console.log("Числа равны")
}

// задача 3
let = prompt("Введите число");
if (number % 2 === 0) {
    console.log("Это чётное число");
}
else {
    console.log("Это нечётное число");
}

// задача 4
let theNumber = prompt("Угадай число")
if (theNumber = "7"){
    console.log("Ты угадал!")
}
else {
    console.log("Ты не угадал")
}


// // задача 5
let login = prompt("Введите логин")
let password = prompt("Введите пароль")
if (login === "admin" && password === "12345"){
    console.log("Добро пожаловать!")
}
else {
    console.log("Неверный логин или пароль")
}

// задача 6
let year = prompt("Введите год");
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("Это високосный год");
}
else {
    console.log("Это невисокосный год");
}

// задача 7
let number = prompt("Введите любое число")
if (number < 100){
    console.log("Маленькое число")
}
else if(number > 100){
    console.log("Большое число")
}
else {
    console.log("Ровно 100!")
}


})