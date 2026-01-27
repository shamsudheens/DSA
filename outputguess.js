console.log([]+[]);
console.log("10" + 10 - 10);
console.log(typeof function(){})
console.log([] == ![]);
console.log(10+"10")
console.log(typeof [])

console.log("A");

setTimeout(()=>{
    console.log("B");
})

new Promise(()=>{
    console.log("D")
})

console.log("C");

const obj = {name:"Alice",age:20};
const obj2 = {name:"Alice",age:20};

const obj3 = Object.assign(obj2);

console.log(obj == obj2);
console.log(obj2 == obj3);


const hello = ()=>{
    var a = 10;
    console.log(a);
}

hello();

console.log(0==false)

console.log(1+"true")

console.log(false==null)

console.log(typeof undefined)

//missed

// hoisting

// == and ===

// closure

// callback
// this

// promise

// foreach map

// querySelector and querySelectorAll

// innerhtml

// How to add an element to DOM?
// Event Bubbling
// event capturing

// Object.assign

// output guessing

// for of loop and for in 

// reduce

// setInterval setTimeout