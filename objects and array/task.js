//Push and Pop

let Areyentraidhi = []
Areyentraidhi.push(1,2,3);
console.log(Areyentraidhi);
Areyentraidhi.pop(2)
console.log(Areyentraidhi);

// Shift and Unshift
let oihughie = ['a','b','c']
oihughie.shift();
console.log(oihughie);
oihughie.unshift('z');
console.log(oihughie);

//Slice
let iron = [1,2,3,4,5]
let flash=iron.slice(1,4);
console.log(flash);


//Splice
let zinga = ["red", "green","blue", "yellow"]
zinga.splice(2,1)
console.log(zinga);
zinga.splice(2,0,"purple","orange");
console.log(zinga)


//Object Creation 
let car = {
  make : "ford",
  model : "mustang",
  year : 1986
}
// console.log(car)
for(let key in car){
   console.log(key,":",car[key])  
}


//Property Deletion
   let cari = {
    make : "ford",
    model : "mustang",
    year : 1986
  }
  for(let key in cari){
    delete cari.year;
     console.log(key,":",cari[key])  
  }

  // Nested Objects // Accessing Object Properties

  let person ={
    name : 'vajid',
    age : 21,
    
    address:{
      street : "ganesh",
      city : "kurnool",
      zipcode : 2010013
    }
  }
console.log(person)
console.log(person.address.city)

//Basic Arrow Function
let greet = (name)=>{
  return `Hello,${name}`;

}
console.log(greet('vajid'))


/*[ 1, 2, 3 ]
[ 1, 2 ]
[ 'b', 'c' ]
[ 'z', 'b', 'c' ]
[ 2, 3, 4 ]
[ 'red', 'green', 'yellow' ]
[ 'red', 'green', 'purple', 'orange', 'yellow' ]
make : ford
model : mustang
year : 1986
make : ford
model : mustang
{
  name: 'vajid',
  age: 21,
  address: { street: 'ganesh', city: 'kurnool', zipcode: 2010013 }
}
kurnool
Hello,vajid*/