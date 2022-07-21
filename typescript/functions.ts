function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(1, 3));

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2:number, cb: (num: number)=> void){   //? this is the way for say to TypeScript that is a callback parameter
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));


let conbineValues: (a: number, b:number)=> number; //**Here you say to TypeScript whats king of srtucture you want your function */

conbineValues = add;
// conbineValues= printResult;
// conbineValues = 5;

console.log(conbineValues(8,8));

addAndHandle(10, 20, (result)=>{
    console.log(result)
})