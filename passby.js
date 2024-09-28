//primitive type pass by value

let num1 = 5 ; 
let num2 =  7;

function mul(a, b){
    a=27
    const result = a * b ; 
    return result;
}
console.log(num1)
mul(num1, num2);
console.log(num1);
// Object and array are pass by referense
let student1 = {name: 'jalil', partner: 'barsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'ananto'
    couple2.partner = 'mim' 
}
console.log(student1, student2)
makeMovie(student1,student2)
console.log(student1, student2)