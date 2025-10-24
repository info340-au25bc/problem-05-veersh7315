'use strict';


let motto = "The iSchool is my school";


console.log(motto);


let mottoLength = motto.length;


console.log(mottoLength);


console.log(motto.indexOf("cool") !== -1);


motto = motto.replace("iSchool", "Information School");


console.log(motto);


let ratio = (motto.length / mottoLength * 100).toFixed(2) + "%";
console.log(ratio);




let numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];


console.log(numbers);


numbers[1] = 4.2;


console.log(numbers);


numbers.push(3);


console.log(numbers);


let sortedNumbers = [...numbers].sort((a, b) => a - b);
let medianIndex = Math.floor(sortedNumbers.length / 2);
console.log(sortedNumbers[medianIndex]);




let rect = {
    x: 30,
    y: 50,
    width: 100,
    height: 50
};


console.log(rect);


console.log(rect.x + ", " + rect.y);


rect.height = Math.sqrt(rect.width);


console.log(rect.width * rect.height);


let circle = {
    cx: 34,
    cy: 43,
    radius: sortedNumbers[sortedNumbers.length - 1]
};


console.log(circle);


let shapes = [rect, circle];


console.log(shapes);


shapes.push({
    base: 33,
    height: 44
});


console.log(shapes);


console.log(shapes[2].hypotenuse);


shapes[2].hypotenuse = 55;


console.log(shapes);