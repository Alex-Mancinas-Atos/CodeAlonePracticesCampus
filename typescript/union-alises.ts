type Combinable = number | string;
type ConversionDescriptor =  'as-number' | 'as-text';
function combine(
    input1: Combinable,
    input2: number|string, 
    resultConversion: ConversionDescriptor
    // resultConversion: string
    
    ) {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        
         result = +input1 + +input2 ;   //? If you add the symbol "+value" is the same thing that "parseFloat(value)"
    } else{
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === 'as-number'){
    //     return +result;
    // }else{
    //     return result.toString()
    // }

  return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combinedStringAges= combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames= combine('Max', 'Anna', 'as-text');
console.log(combinedNames);