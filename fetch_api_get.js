function aman(){
    console.log("welcome inside the function");
    url="aman.txt";
    fetch(url).then((r)=>{
        return r.text();
    }).then((d)=>{
      console.log(d)
    })
}
console.log("before calling of tthe function")
aman();
console.log("after calling of the function")