/***
 * 8 way to undefined
 * 1. variable that is not initialized will give undefined 
 * 2. function with no return
 * 3.paramater that is not pass will be undefined
 * 4.if return has nothing on the right side will return undefined
 * 5.property that doen't exits on an object will give you undefined
 * 6. accessing array elements outside of an index range 
 * 7.deleting an element inside an array
 * 8. set a value directly to undefined
 */

let first;

function second(a,b){
  const total = a+b;
}
const result = second()

function  third(a, b, c, d){
   const total = a+b+c+d;
  //  console.log(a, b, c, d)
}
third(2,3)
// console.log(result)

function noNegetive(a,b){
  if(a<0 || b<0){
      return
  }else{
    return a+b
  }
}
const total = noNegetive(2,-5);
console.log(total)


const fifth = {id:2,name: 'ponchom', age:25 };
console.log(fifth.age, fifth.salary)

const sixth = [4, 89, 87, 56, 54];
//if i remove using slice
delete sixth[1] 
console.log(sixth)
console.log(sixth[1],sixth[5],sixth[200])

const eight = undefined;

const nine = null;
const data = {results:[], updatede:null}
console.log(typeof undefined)
console.log(typeof null) // object 

