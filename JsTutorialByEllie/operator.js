// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 =  ${1+2}`)

//////////////////////////////////////////////////////////////////////////////////

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentatioon

//////////////////////////////////////////////////////////////////////////////////

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// couter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIcrement = counter;
// counter = counter +1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  

//////////////////////////////////////////////////////////////////////////////////

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//////////////////////////////////////////////////////////////////////////////////

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
 
//////////////////////////////////////////////////////////////////////////////////

// 6. Logical operators: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or), fins the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

//havy한 operation일수록 가장 뒤에 두는게 좋다
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null){
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('-_-');
    }
    return true;
}

// ! (not)
console.log(!value1);

//////////////////////////////////////////////////////////////////////////////////

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === stric equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie2); // true

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null == undefined);

//////////////////////////////////////////////////////////////////////////////////

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';

if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

//////////////////////////////////////////////////////////////////////////////////

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//////////////////////////////////////////////////////////////////////////////////

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome': //결과가 같은경우 묶어서 사용
    case 'Firefox':
        console.log('love you!');
        break;
    default: 
        console.log('same all!');
        break;
}

//////////////////////////////////////////////////////////////////////////////////

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while (i > 0) {
    console.log(`whole: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// block을 먼저 실행할 경우 
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops ( cpu에 좋지 않다 )
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. interate from 0 to 10 and print only even numbers
// (use continue)

for (let i = 0; i < 11; i++) {
    if (i % 2 !==0 ){
        continue;
    }
    console.log(`q1. ${i}`);
}


// Q2. iterate from 0 to 10 and print numbers until 
// reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
} 
































































