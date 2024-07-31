// Creating Promises:
function asyncTask(name,Delay,shouldReject){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    if(shouldReject){
      resolve(`Task ${name} completed`)

    }
    else{
      reject(`Task ${name} reject`)
    }
  },Delay)
   })
}
asyncTask('alice',2000,false).then((res)=>{
  console.log(res);
})
.catch((res)=>{
  console.log(res);
});
// asyncTask('Shaik',1000,true).then((res)=>{
//   console.log(res);
// })
// .catch((res)=>{
//   console.log(res);
// });

const Task_1 = asyncTask('Task 1',1000,false);
const Task_2 = asyncTask('Task 2',2000,false);
const Task_3 = asyncTask('Task 3',3000,true);

Promise.all([Task_1,Task_2,Task_3]).then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(`one of task has failed`)
})

Promise.allSettled([Task_1,Task_2,Task_3]).then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(`one of task has failed`,err)
})





