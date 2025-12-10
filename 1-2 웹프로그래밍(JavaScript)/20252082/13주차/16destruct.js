
console.log("1. 구조분해할당 - 배열")
const Week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const mon = Week[0];
const tue = Week[1];
const wed = Week[2];
for (let i in Week) {
    console.log(Week[i]);
}

console.log("----------------------------");

// 배열의 구조 분해
const color = ['red', 'green', 'blue', 'orange'];
let [r, g, b, o] = color; 

console.log(r);
console.log(g);
console.log(b);
console.log(o);

[b, g, r] = ['red', 'green', 'blue'];

console.log();
console.log(b);
console.log(g);
console.log(r);

console.log("----------------------------");

let user = {
    id: 'jamsuham',
    pw: '1234',
    name: '잠수함',
    age: 30,
};

let id = user.id;
let pw = user.pw;
let name = user.name;
let age = user.age;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);