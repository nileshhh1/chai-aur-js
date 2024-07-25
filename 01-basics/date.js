// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());



let myCreatedDate= new Date(2024,0,1) // here in js months are started from 0 and upto 11
console.log(myCreatedDate.toString());

let myCreatedDate1=new Date("01-14-2024") //here for specific declaration of date we use months from 1 to 12 only
console.log(myCreatedDate1.toLocaleDateString());