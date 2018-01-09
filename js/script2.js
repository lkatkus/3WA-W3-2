// console.log(a);
// var a = 5; /* variable declared by var is "hoisted". JS "runs" through the script and hoist vars and functions before starting */
// console.log(a);
//
// // console.log(b); /* will not work */
// let b = 2; /* variable declared by "let" does not hoist. */
// console.log(b);
//
// const A = 10;
// console.log(A);
//
// const Obj = { /* const is not hoisted. Objects "link" to Object cannot be changed, but info inside Object can be changed */
//     p1:"test1",
//     p2:"test2"
// }
//
// testas("hello");
// function testas(msg){
//     console.log(msg);
// }

function test(){
    var a = 10;
    a = a + 10;
    function inner(){
        b = 10;
        var b = b + a;
        return b;
    }
    a = a + inner();
    return a;
}

console.log(test());
// console.log(inner()); /* function inner is outside the "current" scope. It is declared inside test() */

// console.log(z); /* z is defined inside function and is not hoisted */

console.log("=========")

for(var i = 0; i < 3; i++){
    console.log(i);
}
console.log(i);

console.log("=========")


{ /* {} - opens a block. "let" defines variable in its scope. */
    var n = 10;
    // let n = 10; /* variables set by let only appear in the memory when they are "run"
}

console.log(n);

console.log("=========")

var i = 0;

function test(){
    console.log(i);
    var i = 100;
    console.log(i);
}

test();
