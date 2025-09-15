const score = 500
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.89
console.log(otherNumber.toPrecision(4)); //It gives the precised value of the decimal number
// let random = Math.round((Math.random()*10)+1);
// let count = 0;
// let find = 2;

// while(random != find) {
    // random = Math.round((Math.random()*10)+1);
    // console.log(random);
    // count++;
    // }
// console.log(`\nIn ${count} shuffle we find the ${find} number`);
// toFixed(PrecessionValue)

// let num = 1000000;
// console.log(num.toLocaleString('en-US')); //to get value in english format
// console.log(num.toLocaleString('en-IN')); //to get value in english format



// ============= Maths =============
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));
// console.log(Math.min(8, 5, 4, 9, 33, 1));
// console.log(Math.max(8, 5, 4, 9, 33, 1));
// console.log(Math.random());

// console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
let num = Math.round((Math.random() * (max - min + 1))+min);
console.log(num);