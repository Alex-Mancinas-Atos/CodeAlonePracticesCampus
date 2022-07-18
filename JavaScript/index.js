const myArray = [];

let i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}

console.log(myArray);

const anArray = [2,3,4,5,6];
let total = 0;

for(let i = 0; i < anArray.length; i++){
    total += anArray[i];
}

console.log(total);

// function multiplyAll(arr){
//     var product = 1;

//     for(let i = 0; arr.length; i++){
//         for(let k = 0; k < arr[i].length ; k++){
//             product *= arr[i][k] ;
//         }
//     }

//     return product;
// }

// var product = multiplyAll([[1,2],[3,4],[5,6,7]])

// console.log(product)

