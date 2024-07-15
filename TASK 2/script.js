//positive, Negative, zero//

let number = 0
if(number>0){
  console.log(`${number} is postive`)
}
else if(number<0){
  console.log(`${number} is negative`)
   
}
else{
  console.log(`${number} zero`)
}


//sswitch case statements//
let day=7
switch(true){
  case day==1:
    console.log(`Monday`)
    break;
  case day==2:
    console.log(`Tuesday`)
    break;
  case day==3:
    console.log(`Wednesday`)
    break;
  case day==4:
    console.log(`Thursday`)
    break;
  case day==5:
    console.log(`Friday`)
    break;
  case day==6:
    console.log(`Saturday`)
    break;
  case day==7:
    console.log(`Sunday`)
    break;
  default:
    console.log("there are only seven days a week")
}
//ternary //
let age=11
console.log((age>=18)? "Adult":"Minor")

//for loop to print 1 to 10//
let b = 10
for(a=1;a<=b;++a)
  console.log(a)

//reverse loop //
let c = 1
for(j=10;j>=c;j--)
  console.log(j)


