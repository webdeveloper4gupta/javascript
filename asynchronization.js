function suk(name){
    console.log(name)
}
// function aman(){
//     console.log("this is sukritan gupta");
//     suk("hello");
//     console.log("done work inside the function");
// }
// console.log("before function")
// aman();
// console.log("completed")

function aman(){
    console.log("inside te function");
    setTimeout(()=>{
suk("hello");
    },3000);
    console.log("team india")
}
console.log("beore starting function");

aman();

console.log("after strting unction")