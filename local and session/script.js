//Setting and Getting Data localstorage

localStorage.setItem('name','vajid')
let name = localStorage.getItem('name')
console.log(name)

//sessionStorage: Setting and Getting Data//
sessionStorage.setItem('color','blue');
let color = sessionStorage.getItem('color');
console.log(color);


//  Removing Items from Storage//
localStorage.removeItem('name');
sessionStorage.removeItem('color');
console.log(localStorage.getItem('name'));
console.log(sessionStorage.getItem('color'));

// JSON Storage//
let obj = {
  'name': 'vasco',
  'gender': 'male',
  'profession':'fighter'
}

localStorage.setItem('object',JSON.stringify(obj))
let v =JSON.parse(localStorage.getItem('object'))
console.log(v)
sessionStorage.setItem('object1',JSON.stringify(obj))
let f = JSON.parse(sessionStorage.getItem('object1'))
console.log(f)

// Clearing Storage//
localStorage.clear()
console.log(localStorage.getItem('object'))
sessionStorage.clear()
console.log(sessionStorage.getItem('object1'))