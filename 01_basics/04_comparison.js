// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//no problem till we compare same data types

console.log(null > 0); //true
console.log(null == 0); //false
console.log(null >= 0); //true
//equality and comparisons work differently. comparisons convert null to 0 treating it as a number
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === , strict check, data type and value

console.log("2" === 2); //false