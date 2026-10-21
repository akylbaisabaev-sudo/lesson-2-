const firstNumber = Number(prompt("Введите первое число"));
const secondNumber = Number(prompt("Введите второе число"));
const thirdNumber = Number(prompt("Введите третье число"));

let maxNumber = firstNumber;

if (secondNumber > maxNumber) {
  maxNumber = secondNumber;
}

if (thirdNumber > maxNumber) {
  maxNumber = thirdNumber;
}

console.log(maxNumber);


const userAge = Number(prompt("Введите возраст"));

console.log(userAge >= 18 && userAge <= 60);


const username = "admin";
const password = "12345";

const enteredUsername = prompt("Введите username");
const enteredPassword = prompt("Введите пароль");

if (enteredUsername === username && enteredPassword === password) {
  console.log("Вы успешно вошли в систему");
} else {
  console.log("Некорректный username или пароль");
}


const correctAnswer1 = "4";
const correctAnswer2 = "Бишкек";
const correctAnswer3 = "8";
const correctAnswer4 = "const";
const correctAnswer5 = "7";

const answer1 = prompt("Вопрос 1. Сколько будет 2 + 2?");
const answer2 = prompt("Вопрос 2. Столица Кыргызстана? (с большой буквы)");
const answer3 = prompt("Вопрос 3. Сколько типов данных в JavaScript?");
const answer4 = prompt("Вопрос 4. Каким ключевым словом создаётся константа?");
const answer5 = prompt("Вопрос 5. Сколько дней в неделе?");

let score = 0;

if (answer1 === correctAnswer1) {
  score = score + 1;
}

if (answer2 === correctAnswer2) {
  score = score + 1;
}

if (answer3 === correctAnswer3) {
  score = score + 1;
}

if (answer4 === correctAnswer4) {
  score = score + 1;
}

if (answer5 === correctAnswer5) {
  score = score + 1;
}

console.log(score);


const checkedNumber = Number(prompt("Введите число для проверки"));

if (checkedNumber % 2 === 0 || checkedNumber % 7 === 0) {
  console.log("Подходит");
} else {
  console.log("Не подходит");
}


const purchaseSum = Number(prompt("Введите сумму покупки"));

if (purchaseSum > 5000) {
  console.log(purchaseSum - purchaseSum * 10 / 100);
} else {
  console.log(purchaseSum);
}


const symbol = prompt("Введите символ");

console.log(symbol === "a" || symbol === "e" || symbol === "i" || symbol === "o" || symbol === "u");


const baseNumber = Number(prompt("Введите число"));
const percent = Number(prompt("Введите процент"));

console.log(baseNumber * percent / 100);
