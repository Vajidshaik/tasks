//Copying Objects and Arrays

//Shallow Copy

let myObj =  {
  name:'vajid',
  class:'B',
  stream:'AI',
  department:{
    block:'west',
    clg:'pullaiah',
    pincode:123
  }
};
let obj1 = Object.assign({}, myObj);
let obj2 ={...myObj};
obj1.department.clg='shantiram';
obj2.department.block='south';
console.log(myObj);
console.log(obj1);
console.log(obj2);


// Deep Copy
let student = {
  name:'BOY',
  class:'D',
  stream:'IOT',
  depart:{
    room:'EAST',
    clg:'SIDHARTHA',
    pincode:1919
  }
};
let oblesh =JSON.parse(JSON.stringify(student));
oblesh.depart.room='north';
oblesh.depart.pincode=1080;
console.log(student);
console.log(oblesh);


// Using Spread Operator
// Spread in Arrays
const myArr=[1,2,3,4];
const yourArr=[5,6,7,8];
const ourArr=[...myArr,...yourArr];
console.log(ourArr);


// Spread in Objects
let student1 = {
  name:'jaya',
  gender:'female',
  age:30
};
let aditi={
  class:1,
  stream:'BBA',
  status:'graduated'
};
let overall={...student1,...aditi};
console.log(overall);

//  Rest in Functions
function sum(...sum1){
  total = 0;
  for(const i of sum1){
     total+=i;
  }
  return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8));


// Rest in Array Destructuring
let array = ['vs','Nd','pz','mj','rk'];
let [a,b,...rest]=array;
console.log(a);
console.log(b);
console.log(rest);
