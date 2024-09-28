function greeting(grettingHandeler,name){
      grettingHandeler(name)
}
// const name = 'Halim mama'
// const number = [45,54,98] ;
// const laptop = {price:45000, brand: 'lenovo', memory:'8GB'}

function grettingHandeler(name){
  console.log("Good Morning!", name)
}

function greetNight(name){
  console.log("Good Night", name)
}

function geetEvening(name){
  console.log("Good evening", name)
}
greeting(grettingHandeler,"Tom Hans");
greeting(grettingHandeler, 'Tom Brady')
greeting(grettingHandeler, 'Tom Cruse')
greeting(geetEvening, 'Tom solaiman')
greeting(geetEvening, 'Tom salam')
greeting(greetNight,'Kamal')

//Why Important 
//using call back function
function submitHandeler(){
  console.log('Submit button Clicked!')
}
document.getElementById('btn-submit').addEventListener('click', submitHandeler);