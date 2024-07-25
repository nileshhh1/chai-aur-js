// types of array declaration
const arr=[0,1,2,3,4,5,]
const arr2=['shaktiman','naagraj']
const arr3=new Array(1,2,3,4,5)

console.log(arr3);

//array methods


arr.push(6) // this method will add 6 at the last index
arr.pop() // this method will delete last element of the array
arr.unshift(1) // this method add element at the first index
arr.shift() // removes the first element

arr.includes(8) //this method returns true or false 
arr.indexOf(2) // returns the index of the element and if the element is not present in the array it will return -1

console.log(arr);


const newArr= arr.join() // join method will bind and convert array into string 
console.log(newArr);


//slice and splice
const n1=[1,2,3,4,5]
console.log(n1.slice(1,4)); //slice will not manipulate the original array
console.log(n1.splice(1,3)); //splice will manipulate the original array
console.log(n1);