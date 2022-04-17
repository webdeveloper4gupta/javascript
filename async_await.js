async function aman(){
    console.log("enter the function");
    const response=await fetch("aman.txt");
    // resp=await response.json()
    console.log("before");
    return response;
}
console.log("before calling the function")
let v=aman();
console.log("after calling")
console.log(v);
v.then(d=>{
    console.log(d);
})