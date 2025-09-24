// console.log("Hello World");
//var a;
// console.log("a="+a);
// var a=10;

// let a= 40;
// if(a>10){
// let a=300;
// console.log("a inside " + a);
// }else{
//     console.log("else condition");
// }  
// console.log("a outside " + a);  


// let a="20";
// if(a===20){
//     console.log("equal data");
// }else{
//     console.log("not equal data");
// }

// const myname = "Rahul";
// //console.log("hello"+myname);
// const data = `hello ${myname}`;
// console.log(data);

// function msg(name){
//     return name+"welcome to js";
// }
// const data=msg("Rahul ");
// console.log(data);


// const data= function msg(name){
//      return name+"welcome to js";
// }
//  const msg= data("Rahul ");
//  console.log(msg);


//arrow function
// const msg= (name) => name+"welcome to js";
//  const data= msg("Rahul ");
//  console.log(data);

//single line
// const data=msg=>msg;
// console.log(data("hola"));

//IIFE
// (function(){
//     console.log("welcom to JS")
// })();

// (()=>{
//     console.log("welcom to JS")
// })();

// setTimeout(()=>{
//     console.log("welcome to js")
// },1000);


// setInterval(()=>{
//     console.log("welcome to js")
// },1000);


// function greet(msg="welcome"){
//     console.log("HELLO "+msg);
// }
// greet("nnya");

function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javacompiler(){
            return "Java compiler";
        }
        data=javacompiler();
    }
    else if(lang=='python')
    {
        function pythoncompiler(){
            return "python compiler";
        }
        data=pythoncompiler();
    }
    else{

        data="no compiler";
    }
    return data;
}
console.log(selectlanguage('java'));
console.log(selectlanguage('python'));
console.log(selectlanguage());

    