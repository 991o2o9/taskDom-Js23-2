// События Native JS. Классная работа
// ! Все HTML элементы которыми нужно манипулировать пропишите отдельно в файле index.html

// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// W - white;
// SHIFT + B - black;
// SHIFT + G - gray;

let div = document.querySelector("#colorful_div");
window.addEventListener("keydown", (e) => {
  if (e.key.toUpperCase() == "R") {
    div.style.backgroundColor = "red";
  } else if (e.key.toUpperCase() == "G") {
    div.style.backgroundColor = "green";
  } else if (e.key.toUpperCase() == "B") {
    div.style.backgroundColor = "blue";
  } else if (e.key.toUpperCase() == "W") {
    div.style.backgroundColor = "white";
  }
  if (e.key.toUpperCase() == "B" && e.shiftKey) {
    div.style.backgroundColor = "black";
  } else if (e.key.toUpperCase() == "G" && e.shiftKey) {
    div.style.backgroundColor = "gray";
  }
});

// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;

let i = 1;
let btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  console.log(i);
  i *= 2;
});

// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;
let body = document.querySelector("body");
let newdiv3 = document.createElement("div");
newdiv3.style.width = "500px";
newdiv3.style.height = "500px";
newdiv3.style.backgroundColor = "pink";
body.append(newdiv3);
newdiv3.addEventListener("click", (e) => {
  console.log(`по "X", ${e.x}, по "Y" ${e.y}`);
});
// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута
let coloredInp = document.createElement("input");
coloredInp.type = "text";
coloredInp.placeholder = "Введите цвет шаурмы";
coloredInp.addEventListener("keydown", (e) => {
  document.body.style.backgroundColor = coloredInp.value;
});
body.append(coloredInp);
