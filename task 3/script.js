
//.Multiplication Table//
let a = 5;
let b = 0
for(i=1;i<=10;i++){
   b=a*i
  console.log(a+"X"+""+i+"="+b)
}

//Sum of Even Numbers Between 1 and 50//
let sum=0
for(i=1;i<=50;i++){
  if(i%2===0){
    sum+=i;
  }
}
console.log(sum)

//Sum of Odd Numbers//
let sum1=0
let j=1
while(j<=20){
  if(j%2===1)
    sum1+=j
  j++
  
}
console.log(sum1)

//Factorial Calculation//

let s=1
let fact=1
while(s<=5){
  fact=fact*s
  s++
}
console.log(fact)


//prime number//
let lower = 2;
let upper = 20;

let num = lower;
while (num <= upper) {
    if (num > 1) { 
        let isPrime = true;
        let i = 2;
        while (i * i <= num) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
            i++;
        }
        if (isPrime) {
            console.log(num);
        }
    }
    num++;
}
