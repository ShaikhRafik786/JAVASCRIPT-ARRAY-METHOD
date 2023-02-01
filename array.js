// const letters = ["a", "b","c","d","e","f","g","h","i","j","z","rk","royal"];
// const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 20];
// console.log(letters.pop(), "-->", letters);
// console.log(letters.pop(), "-->", letters)
// console.log(letters.pop(), letters);
// console.log(letters.push("sk") )
// console.log(letters)
// console.log(letters.push("maaz", "azhar", "come back to Exeltech"), "abc", "xyz", letters);
// console.log(letters.shift(), letters);
// console.log(letters)
// console.log(letters.unshift("1000", "888", "777", "786"), letters)

// const filled = nums.fill("0", 7, 10)
// console.log(filled);
// console.log(
//   letters.find(function (item) {
//     return item === "d";
//   })
// );
// console.log(
//   letters.findIndex(function (item) {
//     return item === "d";
//   })
// );
// console.log(letters.some(function (item){
//     return item === "c";
// }));
// console.log(letters.find((item)=>item==="444"));
// console.log(letters.find((item)=>item==="z"));
// console.log(letters.findIndex((item) => item=== "d"));
// console.log(letters.includes( "g"));
// console.log(letters.indexOf( "z"));
// console.log(letters.indexOf( "y"));
// console.log(letters.some((item)=> "b"));
// console.log(letters.some((item)=> item === "r"));
// console.log(nums.some((item)=> item % 12 ===0));
// console.log(nums.every((item)=> item % 2 ===0));
// console.log(nums.every((item)=> item > 2 ===0));
// console.log(nums.every((item)=> item > 20));
// console.log(letters.slice(10,11));
// console.log(letters.slice(5,10));
// console.log(letters.splice(1,5), "--->",letters.push("rafik khan") , letters);
// console.log(letters.splice(1,5,100), "--->",letters);
// console.log(letters.splice(1,5,100, 500, "srk"), "--->",letters);
// console.log(letters.splice(1,5,100, 500, "srk"), "--->",letters);

// const digits = [10, 11, 12, 13, 14,"shahbaz","khan","sayyed"];
// const sliced = digits.slice(2,8)
// console.log(sliced);

// const rk = digits.splice(2,5,1,2,3,4,5)
// console.log(rk)
// console.log(digits)

// digits.splice(2, 3, "a", "b");
// const sk = digits.splice(6,7, "rafik" )
// console.log(digits)

// console.log(digits.join("/"))
// const num = [1, 2, 3, 4, 5, 6, 7];
// const filtered = num.filter((item) => item < 5);
// console.log(filtered);
// const num = [1, 2, 3, 4, 5, 6, 7];
// const mapped = num.map((item) => item * 10);
// console.log(mapped);
// const mapped = num.map((item) => {
// if (item % 2 === 0) {
//    return item * 2;
// }else{
//    return item*3;
// }
// });
// console.log(mapped);

// const forEached = num.forEach((item) => {
//   if (item % 2 === 0) {
//     console.log(item * 2);
//   } else {
//     console.log(item * 3);
//   }
// });

// const reduced = num.reduce((acc,cur) => {
//   return acc + cur *2;
// }, );
// console.log(reduced);

// const reduced = num.reduce((acc, cur) => {
//   return acc + cur * 2;
// }, 0);
// console.log(reduced);
// console.log("2", 2);

// const numbers =[1, 2, 3, 4,[ 5, 6,["a", "b"]], [7, 8]];
// console.log(numbers.flat(3));
// console.log(numbers.reverse());
///ARRAY is Collection of similler deta type./////types of array name is object ---array is internal reprasentation.
// const nums = ["a", "B", "c"]
// // const  sorted = num.sort((a, b)=> (a > b ? 1 : -1));
// // console.log(sorted);

// const sorted = nums.sort((first, second) =>
// first.toLowerCase() > second.toLowerCase() ? 1 : -1);
// // console.log(sorted);
// const products = [
//   {
//     category: "shoes",
//     size: 7,
//     color: "Black",
//     brand: "Adidas",
//     id: 1,
//     price: 2000,
//   },
//   {
//     category: "shoes",
//     size: 8,
//     color: "white",
//     brand: "Puma",
//     id: 2,
//     price: 4000,
//   },
//   {
//     category: "shoes",
//     size: 9,
//     color: "Yellow",
//     brand: "puma",
//     id: 3,
//     price: 3000,
//   },
//   {
//     category: "shoes",
//     size: 8,
//     color: "red",
//     brand: "Nike",
//     id: 4,
//     price: 4000,
//   },
//   {
//     category: "flipper",
//     size: 9,
//     color: "Green",
//     brand: "adidas",
//     id: 5,
//     price: 6000,
//   },
//   {
//     category: "shoes",
//     size: 7,
//     color: "Orange",
//     brand: "nike",
//     id: 6,
//     price: 7000,
//   },
// ];

// const sorted = products.sort((first, second) =>
//   first.brand.toUpperCase() > second.toUpperCase() ? 1 : -1
// );
// console.log(sorted());

// / const arr = [2, 3, 4, 1, 5, 6, 7, 8];

// const result = arr.every((item)=> item >0)

// console.log(result);

// const result2 = arr.some((item)=> item >7)
// console.log(result2);

// const result3 = arr.includes(1)
// console.log(result3);

// const arr = [2, 3, 4, 1, 5, 6, 7, 8, 9, 12]
// const result=arr.find(Element=>Element>4)
// console.log(result);

// const arr = [2, 3, 4, 1, 5, 6, 7, 8, 9, 12]
// // const result=arr.find((item)=> item >8)

// const result=arr.findIndex((item)=> item===7)
// console.log(result);

// function getArea(firstName, LastName){
//     firstName: firstName,
//     lastName,
//     getName() {
// //         return  First Name: ${this.}
//     }
// }

// const obj = {
//     fname: "Raj",
// };

// const obj2 = {
//     lname: "Karan"
// };

// const obj3 = {...obj1, ...obj2 };
// const split = obj3.split ("").split;
// console.log(obj3);

// const str1 = "I am From Nanded";
// const reverse = str1.split(" ").reverse().join(" ");
// console.log(reverse);

// const input = (num) => {
//     const a = 7 - num;

// };
// console.log(input(3));
// console.log(input(4));
// const firo = (n) => {
//     const fibarry = [0, 1];
//     for (var i=2; i <= n; i++) {
//         fibarry.push(fibarry[i - 2] + fibarry [i - 1]);
//     }
//     return fibarry;
// };
// console.log(firo(10));

// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let number = 8;
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }
// console.log(nextTerm);

// const num = [1, 2, 3, 4, 5, 6, 7];
// const filtered = num.map((item) => item * 2);
// console.log(filtered);

// const rk = [1,2,3,4,5,6,7,8,9];
// const ssk = rk.reduce((item)  => item * 2);
// console.log(ssk)

// const ak = ["A", "b", "C", "b", "d", "N", "F", "A"];
// const sk = ak.filter((item, index) => ak.indexOf(item) === index);
// // const arr = sk.sort();
// console.log(sk);



// const arr = ["danish","danish","rk", "rk","sk","rafik","rafik",1,0,1,0,1,2,0,2,3,3];
// const filtered = arr.filter((item, index)=> arr.indexOf(item)===index);
// console.log(filtered);

