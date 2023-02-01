// const details = ["kwaja", "pasha", 2022-1992, "teacher", ["afroz", "adil", "meraz"], true,];

// //creating a dynamic //array
// //way one--->dynamic storing value in an arrry
// const   typeArray = [];

// for  (let i = 0; i < details.length; i++){
//     typeArray[i] = typeof details[i];
// }
// console.log(typeArray);

// //Another way:--> storing dynamic values in an array
// for (let i = 0; i < details.length; i++ ){
//     typeArray.unshift(typeof details[i]);
// }
// console.log(typeArray);
// const year = [1991, 1992, 1993, 1995, 2007, 2000];
// const Age = [];
// for (let i = 0; i < year.length; i++) {
//   Age.push(2033 -year[i]);
// //   Age.push(futureAge - Age[i]);
// }
// console.log(Age);



// const person = {
//   fname: "Somevalue",
//   lname: "Jonhson",
//   city: "london",
// };
// const { fname, city } = person;
// console.log(fname, city);



// //Remove Duplicate array// new Set//
// let chars = ['A', 'B', 'C', 'D', 'B', 'E','A'];
// let unique = [ ...new Set(chars)];
// console.log(unique);

//using Filter //
// let rk = ['ss', 'kk', 'zz', 'dd', 'kk','zz'];
// let  sk = rk.filter((item, index)=> {
//     return rk.indexOf(item)===index;
// });
// console.log(sk);

// //ForEach + Includes//
// let arr = ['a', 'b','c','d','a', 'b'];
// let arr1 = [];
// arr.forEach((e)=> {
//     if(!arr1.includes(e)) {
//         arr1.push(e);
//     }
// });
// console.log(arr1);

//Reduce mwthod///Remove ducplicate///
// let arr = [ 'Apple', 'mango', 'orange', 'mango', 'Apple', 'banana'];

// function RemoveDuplicate(arr) {
//     var unique = arr.reduce(function (acc, curr) {
//         if(!acc.includes(curr))
//         acc.push(curr);
//         return acc;
//     }, []);
//     return unique;
// }
// console.log(RemoveDuplicate(arr));

///Array Prototype///
// var arr = ['rk', 'sk','rk', 'sk', 'kkk'];
// Array.prototype.unique = function () {
//     var unique = [];
//     for ( i=0; i<this.length; i++) {
//         var curr = this[i];
//         if(unique.indexOf(curr) < 0) unique.push(curr);
//     }
//     return unique;
// }
// console.log(arr.unique());


