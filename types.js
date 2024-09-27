// strongly typed language
// int a = 5;
// string b = "alin halim khalim"
//bool c = True 
//object student = {name: 'noya man', id: 55}
// int [] numbers = [12,45,79]
//string [] freinds = "Abul", "kabul"

//Javascript is a dynamic type Programming Language.
// Primitive type value
const a =5 ;
const b = "Home MInister Affairs";
const d =  true;


//Non Primitive type
const ages = [45,65,48];
const students = {id:23, class:7};
// console.log(typeof a, typeof b, typeof ages, typeof students)

let x = 5 ;
let y = x ; 
console.log(x, y)
y= 7
console.log(x, y)
 // referense e dhore rakhe , tahole tader dui man e change 
 // hooi
let p = {job: 'Web developer'}
let q = p ; 
console.log(p, q)
//{ job: 'Web developer' } { job: 'Web developer' }
 q.job = 'Front end developer'
console.log(p, q) 
//{ job: 'Front end developer' } { job: 'Front end developer' }