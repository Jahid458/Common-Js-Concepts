
print5()
console.log(print10)
print10()
for(let i =0;i<5;i++){
  // console.log(i)
}
// console.log("outside",i)

function print5(){
  console.log('Indide print5',5);
}

var print10 = function(){
  console.log('Inside print10', 10)
}