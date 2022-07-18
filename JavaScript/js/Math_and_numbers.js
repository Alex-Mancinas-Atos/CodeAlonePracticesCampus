//Random number between 0 and 1
function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

//Random int number between 0 and 20 (20 is not included)
let randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log(randomNumberBetween0and19);

//Random number between 0 and 10 (10 is not included)
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

//Generate random numbers with range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

const myRandom = randomRange(5, 15);

console.log(myRandom);

//Parse int function
function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));

//Parse int binary numbers
function convertToInteger1(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger1("10011"));

//Ternary operators

function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(1, 2));

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkSign(0));

//Prevent object mutation
function freezeObj() {
  "use strict";

  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (error) {
    console.log(error);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

// Use arrow functions to write concise anonymous functions

let magic = () => new Date();

console.log(magic);

//arrow functions with parameters

let myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// writing high order arrow functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5, 2));
console.log(increment(5));

//Use the rest operator with function parameters

const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3, 4));

//Use the spread operator to Evaluate Arrays In-Place

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];

let arr2;

(function () {
  arr2 = [...arr1];
  arr1[0] = "Potato";
})();

console.log(arr2);

//Use destructuring Assigment to assing Variables From Objects

let voxel = {
  x: 3.6,
  y: 7.4,
  z: 6.54,
};

//Normal way
// let x = voxel.x;
// let y = voxel.y;
// let z = voxel.z;

//asign valors with destructuring
const {
  x: a,
  y: b, // <- example
  z: c,
} = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures; //<- practice

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

/////// ------- Destructuring assignment woth nested objects -------------- //////////
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};
function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let ba = 8,
  bb = 6;

(() => {
  "use strict";
  [ba, bb] = [bb, ba];
})();
console.log(ba);
console.log(bb);

// Use Destructuring assigment with the rest operator

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

/////////////////////
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };

// function makeList(arr) {
//     const resultDisplayArray = [];
//     for (let i = 0; i < arr.length; i++) {
//     resultDisplayArray.push(`<li class="text-warning">${arr[i]}`)
// }
// return realNumberArray;
// }

// const resultDisplayArray = makeList(result. failure);
// console.log(resultDisplayArray)

///Write Concise Object Literal Declarations Using Simple Fields

// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,                                                <- normal way
//     gender: gender,
//   };
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male"));

const createPerson = (name, age, gender) => ( { name, age, gender });    // <- shorter way with arrow functions
console.log(createPerson("Zodiac Hasbro", 56, "male"));


//Older way to create an object
// var SpaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zeus = new SpaceShuttle("Jupiter");
// console.log(zeus.targetPlanet);


//New way to create an object
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);


function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);



//////Use getters and setters for manage information class
class Book {
    constructor (author) {
    this._author = author;
    
    }
    // getter
    get writer() {
    return this._author;
    }
    // setter
    set writer (updatedAuthor) {
    this._author = updatedAuthor;
    }
}


function makeClass() {
    class Thermostat {
    constructor (temp) {
    this._temp = 5/9 * (temp - 32);
    }
    get temperature () {
        return this._temp;
        }
    set temperature (updatedTemp) {
        this._temp = updatedTemp;
        }
  }
  return Thermostat;
}



const Thermostat = makeClass();
const thermos = new Thermostat (76);
let temp = thermos. temperature;
thermos.temperature = 26;
temp= thermos. temperature;