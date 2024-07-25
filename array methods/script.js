arr = [1,2,3,4,5]
arr.forEach((itrtr)=>{
    console.log(itrtr)
})

// Using map
num = [1,2,3,4,5,6,7,8]
let double=num.map((itrtr,index)=>{
    return itrtr*2
    
})
console.log('_old_',num);
console.log('_new_',double);


// Using filter
const ages = [1,2,3,4,5,6,7,8,9];
const result = ages.filter((check)=>{
      if(check%2===0)
      return check
});
console.log(result)


//Using reduce
const a=[1,2,3,4,5,6,7,8,9,10]
const sum=a.reduce((acc,itrtr)=>{
    acc=acc+itrtr;
    return acc;
},0)
console.log(sum);


// Using find
stud=[
  {
    name:'karteek',
    age:23
  },
  {
    name:'narasimha',
    age:24
  },
  {
    name:'giddaiah',
    age:25
  },
  {
    name:'niranjan',
    age:26
  },
  {
    name:'chakr',
    age:27
  },
  {
    name:'parvez',
    age:28
  }]
  
  let total=stud.find((strech)=>strech.age>25)
  console.log(total);

//Using finIndex
  study=[
    {
      name:'karteek',
      age:18
    },
    {
      name:'narasimha',
      age:17
    },
    {
      name:'giddaiah',
      age:25
    },
    {
      name:'niranjan',
      age:26
    },
    {
      name:'chakr',
      age:27
    },
    {
      name:'parvez',
      age:28
    }]
    
    let first=study.findIndex((iter)=>iter.age<18)
    console.log(first);

