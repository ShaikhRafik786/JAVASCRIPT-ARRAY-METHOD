// const arr = ["a","b", "c", "d", "e", "f", "g"];

// // console.log(arr.pop());
// console.log(arr.push("s"));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr.unshift("rk"));
// console.log(arr.unshift(""));
// console.log(arr);

// const letters = [ "a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "i",];
// const nums = [2, 4, 6, 8, 10, 12, 14, 16,22, 18, 199];
// const products = [{  category: "shoes",  size: 7,  color: "Black",  brand: "Adidas",  id: 1,  price: 2000,},
// { category: "shoes", size: 8, color: "white", brand: "Puma", id: 2, price: 4000,},{  category: "shoes",  size: 9,  color: "Yellow",  brand: "puma",  id: 3,  price: 3000, },
//  { category: "shoes", size: 8, color: "red", brand: "Nike", id: 4, price: 4000,},
//   { category: "flipper", size: 9, color: "Green", brand: "adidas", id: 5, price: 6000, },
//   {category: "shoes",size: 7,color: "Orange",brand: "nike",id: 6,price: 7000, },];

// console.log(letters.includes("s"));
///INCLUDES--->//ek toh bhi value provided hai ya nhi check karta//

// console.log(letters.find((item) => item === "h"));
//FIND---> Diye so index value ko kya hai yeh dekhta///

// console.log(nums.some((item) => item > 20));
//SOME---> diye so condition me Ek bhi value match hori to answer true dega nhi to false dega//

// console.log(nums.every((item) => item !== 200 ));
//EVERY---> har ek element diye so condition ko match kara yahi dekhta value match kara to true nhi to False//
// console.log(nums.every((item) => item <= 199 ));

// console.log(nums.findIndex((item)=> item === 200));
//FINDINDEX---> Eska index number batayega ////

// console.log(nums.indexOf(200));
//INDEXOF----> element ki index value nikalta index ki value dikhata//
// console.log(nums.indexOf(4));

//JOIN---> do value join karata///
// const sk = letters.join(" ")
// console.log(sk);

// //Spred operators//
// const arrOne = [1, 2, 3];
// const arrTwo = [3, 2, 1, ["ark", "srk"]];
// const newArr = [...arrOne, arrTwo];

// console.log(...arrTwo);
// // console.log(...arrTwo, ...arrOne);
// // const newArr = [...arrTwo, ...arrOne];
// console.log(newArr);

// const objOne = {name: "john", age:"25"};
// const objTwo = {contact: 98824576514, adress: "Nanded"};
// // // const  newObj = {...objOne, age: 26};
// const newObj = {...objOne, ...objTwo, adress:"mumbai"};
// const srk = {...newObj, name:"maroof", area:"pirburhan", education:"IT Engg"};
// console.log(newObj);



// const mapped = products.map((element) => {
//   if(element.price <= 4000) {
// return{...element, delivery: 3 };
//   }else {
//     return {...element, delivery: 5};
//   }
// });
// console.log(mapped);
// ///
// const arr = ["maharashtra"];
// const rk = arr.forEach((item) =>  {
      
// }
// console.log(rk)