let obj1 = { name: "Person 1", age:5 };
let obj2 = { age:5, name: "Person 1" };
let a=JSON.stringify(obj1)===JSON.stringify(obj2)
console.log(a)