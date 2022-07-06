/* Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
let squNumber = document.getElementById("square-input");
let squareButton = document.getElementById("square-button");
let solution = document.getElementById("solution");
squareButton.addEventListener("click", function () {
let squareOne = squNumber.value;
let squareTwo = squNumber.value;
let solved = squareOne * squareTwo;
 solution.innerText = `The result of squaring the number ${squareOne} is ${solved}.`;
}); */
/* OR (with argument) */
let squareButton = document.getElementById("square-button");
let squareNum = document.getElementById("square-input");
let solution = document.getElementById("solution");

squareButton.addEventListener("click", function squareNumber(num) {
    num = squareNum.value;
    var squaredNumber = num * num;
    console.log(`The result of squaring the number ` + num + ` is `+ squaredNumber + `.`);
    solution.innerText = `The result of squaring the number ` + num + ` is `+ squaredNumber + `.`;
});

/* Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.". */

let halfButton = document.getElementById("half-button");
let halfNum = document.getElementById("half-input");

halfButton.addEventListener("click", function halfNumber(num) {
    num = halfNum.value;
    var halfedNumber = num / 2;
    console.log(`Half of `+ num + ` is ` + halfedNumber + `.`);
    solution.innerText = `Half of `+ num + ` is ` + halfedNumber + `.`
});

/* Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4." */
let perButton = document.getElementById("percent-button");
let per1 = document.getElementById("percent1-input");
let per2 = document.getElementById("percent2-input");

perButton.addEventListener("click", function percentOf(num1, num2) {
    var num1 = per1.value;
    var num2 = per2.value;
    var percent = (num1/num2) * 100;
    console.log(``+ num1 + ` is ` + percent + `% of ` + num2 +`.`);
    solution.innerText = ``+ num1 + ` is ` + percent + `% of ` + num2 +`.`;
});

/* Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172." */
let areaButton = document.getElementById("area-button");
let areaNum = document.getElementById("area-input");

areaButton.addEventListener("click", function areaOfCircle(radius) {
    var radius = areaNum.value;
    var area = Math.PI * radius * radius;
    area = area.toFixed(2);
    console.log(`The area of circle with radius ` + radius + ` is ` + area +`.`);
    solution.innerText = `The area of circle with radius ` + radius + ` is ` + area +`.`
});

/* Write a function that will take one argument (a number) */

function get(num) {
    var half = num / 2;
    var square = half * half;
    var area = Math.PI * square * square;
    var final = (square/area) * 100;
    console.log(final);
}
get(10);



