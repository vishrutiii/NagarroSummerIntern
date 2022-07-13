// var x = 1;
// console.log(x);
// function a(){
//     x=10;
//     console.log(x);
// }

// a();
//  output 10
// -----------------------------------

// let x = 10;
// console.log(x);
// function a(){
//     x=100;
//     console.log(x);
// }
// a();

// x=1000;
//  output 10 100
// -----------------------------------

// const x = 100;
// console.log(x);
// function a(){
//     x=10;
//     console.log(x);
// }
// a();
// output 100 10
// -----------------------------------

// function a(){
//     console.log(x);
// }
// a();
// var x=2;
//  undefined if only var is used in this case
// -----------------------------------

// let x;
// function b(){
//     console.log(x);
// }
// b();
// x=2;
//  output 2
// -----------------------------------

// function a(){
//     console.log(x);
// }
// a();
// let x=2
//  error

// -----------------------------------

// var a=1;
// let b=2;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);
//  output 10 20 30 2
// ----------------------------------
//  function x(){
//      var a =7;
//      function y(){
//          console.log(a);
//      }
//      return y;
//  }
//  var z =  x();
//  console.log(z);
//  z();

// output
// ƒ y(){
//     console.log(a);
// }
// 7
// ----------------------------------

// function x(){
//     for(var i=0;i<6;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i)
//     }
// }
// x();

// output 0 1 2 3 4 5
// ----------------------------------

// function x(){
//     for(var i=0;i<6;i++){
//         function close(i){
//                 setTimeout(function(){
//                     console.log(i);
//                 },1000*i)
//         }
//         close(i);
//         console.log("interview");
//     }
// }
// x();
// output interview interview interview interview interview interview 0 1 2 3 4 5
// -----------------------------------

// const person = {
//     name:"nagarro",
//     age:100,
//     isAutherised: false,
//     isUnicorn:true,
//     bestDomain:"analytics"
// }

// question1: make copy of the object and manipulate values inthe new copied object
// question2: print all the properties using appropriate for loop

// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? hat it only has one single stack to call the executed program
// 3. what is the difference between mcp and cep is that mcp is used for the execution of the program and cep is used for the execution of the function.
// 3. what is hoisting? here the interpretor will push the declaration of funxtions to the top of the stack along with variables and classes before executing the program
// 4. call back queue it is used to fetch the callback functions from the event loop and execute them
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope block scope is used to define the variables and functions in the block A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop and global scope is used to define the variables and functions in the global scope they are accessbile all over
// 7. closure? It is used to have private variables for a function. its scope is limited to the parent scope
// 8. event loop event loop is the main thread that is used to execute the code, collect the callbacks and execute them
// 9. asynchronous programing is used to run a program in parallel say for example a long running code and the program still responsive to other events
// 10. for each loop is used to iterate over the array and objects by iterating over each element.
