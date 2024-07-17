//Functions without Parameters//
function greet(){
  console.log("Hello,World!")
}
greet()

//Functions with Parameters//
function addNumbers(a,b){
  let sum = a+b
  console.log(sum)
}
addNumbers(10,40)

//Functions with Return Statements//
function multiply(x,y){
  let multi = x*y
  return multi
}
result=multiply(10,20)
console.log(result)

//Combining Functions//
function calculateRectangleArea(length,width){
  function multiply(length,width){
    let multi = length*width;
    return multi
  }
result=multiply(10,60)
console.log(result)
}
calculateRectangleArea()


//Default Parameters//
function greetUser(name){
  console.log(`Hello,${name}`)

}
greetUser("vajid")
greetUser()


//Output//
/*Hello,World!
50
200
600
Hello,vajid
Hello,undefined*/