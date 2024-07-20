# chai-aur-js

// datatypes
1.primitive > 7types: string, number, boolean, null, undefined, symbol, bigint

js is dynamically typed language as we need not to defined the datatypes while declaring variables

const score=100;
const scoreValue=100.3;
const isLoggedin=true;
const isLoggedout;
const isLog=null;


const id = Symbol('123)
const anotheIid = Symbol('123)

2.reference type(non-primitive):
array, objects, functions

const heros=["shaktimaan","nagraj","doga"] //array example


//object is written in a block {key:"",value: } with key value pair we can store object in variable and its datatype can be anything primitive or non-primitive 
let obj={
    name:"nileshh",
    age: 22,
}

//function declaration 

cont myfun= function(){
    log("hello world")
}

typeof is a function which returns the type of datatypes
