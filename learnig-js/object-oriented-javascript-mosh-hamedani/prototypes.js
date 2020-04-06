// ***************************** Excercise 1

// let obj1 = {}
// let obj2 = {}
// console.log(obj1.__proto__ === obj2.__proto__);


// ***************************** Excercise 2
// let obj = {}
// obj.__proto__.toString = (params) => {
//   console.log(params);
//   return params
// }
// console.log('obj.toString(): ', obj.toString());

// ****************************** Property descriptor
// let obj = {name: 'Atiqur Rahman'}
// let objProperties = Object.getPrototypeOf(obj)
// console.log('objProperties: ', objProperties);
// let propertyDescriptor = Object.getOwnPropertyDescriptor(obj, 'name')
// console.log('propertyDescriptor: ', propertyDescriptor);
// Object.defineProperty(obj, 'name', {
//   enumerable: false
// })

// console.log('Obj', Object.keys(obj));
 


// let obj1 = {a: 1, b: 2}
// let obj2 = {c: 3, d: 3}

// let obj3 ={}
// obj1.__proto__ = obj3.__proto__
// console.log('obj3: ', obj3);


// function MakeObj1 (name, age) {
//   this.name = name
//   this.age = age
// }

// function MakeObj2 (email, pass) {
//   this.email = email
//   this.pass = pass
// }

// let makeObj1 = new MakeObj1('Atiqur Rahman', 27)
// console.log('makeObj1: ', makeObj1);
// let makeObj2 = new MakeObj1('atiqur.rahman951@gmail.com', '13558766874')
// console.log('makeObj2: ', makeObj2);

// let makeObj3 = {}
// makeObj3.__proto__ = makeObj1
// console.log('makeObj3: ', makeObj3);