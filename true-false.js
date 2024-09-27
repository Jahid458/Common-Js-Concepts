/***
 * Truthy: 
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other than 0
 * 3. Any string other than emphty string
 * 4.'0','false'
 * 5.{}
 * 6.[]
 * 
 * Falsy:
 * 1.false
 * 2. 0
 * 3.undefined
 * 4.null
 * 5. 
 * 6
 */


let x = [5,6];
console.log(x)

if(x){
  console.log('Value of x is thruthy')
}
else{
  console.log('Value of x is falsy')

}

//optional
//check falsy
const y = null
if(!y){
  console.log('Value is falsy')

}
//check truthy
const z = 50
if(!!z){
  console.log('value is truthy')
}