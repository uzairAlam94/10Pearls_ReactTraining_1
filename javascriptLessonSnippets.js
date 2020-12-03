'use-strict'
// Javascripts Concepts and Features

// Variables ----------------------------------

//Constant ----------
//by value
// const a = "uzair";
// a = "alam";
// console.log(a);

// by reference
// const a = { name: "uzair", lastname: "alam" };
// a.name = "testing";
// console.log(a);

// Var -----------

// var a = "alam";
// var a = "uzair";
// console.log(a);

// function test() {
//     var b = "ionic";
//     if(true) {
//         var b = "tesla";
//         console.log(b);
//     }
//     console.log(b);
// }

// test();

// Let  -----------
// let a = "uzair";

// let a = "uzair";
// console.log(a);

// if(true) {
//     let a = "alam";
//     console.log(a);
// }
// console.log(a);

// for(let i = 0; i< 10; i++) {
//     setTimeout(function() { console.log(i); },0);
// }

// Variables ----------------------------------


// Functions ----------------------------------

// arrow functions 
// function a() {
//     return true;
// }
// console.log(typeof(a));

//const a = () => true;
//or
//const a = () => { return true; }
//console.log(typeof(a));

// currying function
// function sum(x) {
//     return function(y) {
//         console.log(x + y);
//     }
// }

// const sum = (x) => (y) => console.log(x + y);

//  sum(3)(2);

// Functions ---------------------------------- 


// Spread Operators ---------------------------
// Arrays -------------------------------------

// normal array concat() method 
// let arr = [1,2,3]; 
// let arr2 = [4,5]; 
  
// arr = arr.concat(arr2); 
  
// console.log(arr); // [ 1, 2, 3, 4, 5 ] 

// spread operator doing the concat job 
// let arr = [1,2,3]; 
// let arr2 = [4,5]; 
  
// arr = [...arr,...arr2]; 
// console.log(arr); // [ 1, 2, 3, 4, 5 ] 

// copying without the spread operator 
// let arr = ['a','b','c']; 
// let arr2 = arr; 
  
// console.log(arr2); // [ 'a', 'b', 'c' ] 

// spread operator for copying  
// let arr = ['a','b','c']; 
// let arr2 = [...arr]; 
  
// console.log(arr); // [ 'a', 'b', 'c' ] 
  
// arr2.push('d'); //inserting an element at the end of arr2 
  
// console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 
// console.log(arr); // [ 'a', 'b', 'c' ] 

// expand using spread operator 
  
// let arr = ['a','b']; 
// let arr2 = [...arr,'c','d']; 
  
// console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 

// with spread  
// let arr = [1,2,3,-1]; 
// console.log(Math.min(...arr)); //-1 

// Array ------------------------------------

// Objects ----------------------------------

// const user1 = { 
//     name: 'Jen', 
//     age: 22 
// }; 
  
// const clonedUser = { ...user1 }; 
// console.log(clonedUser);


// const user1 = { 
//     name: 'Jen', 
//     age: 22, 
// }; 
  
// const user2 = { 
//     name: "Andrew", 
//     location: "Philadelphia" 
// }; 
  
// const mergedUsers = {...user1, ...user2}; 
// console.log(mergedUsers) 

// destructing using spread
// const user1 = { 
//     name: 'Jen', 
//     age: 22,
//     lastname: "tesla",
//     addresss: "b/1 california",
// }; 

// const { name, ...others } = user1; 
// console.log(name, others);

// Objects ----------------------------------
// Spread Operators ---------------------------