function am(){
    console.log("resolve function call");
}
function amu(){
    console.log("reject function call")
}
function aman(){
    return new Promise(function(resolve,reject){
    setTimeout(()=>{
        const e=false;
        if(!e){
            console.log("yes hurray it resolves");
            resolve();
        }
        else{
            console.log("sorry it is rejected");
            reject();
        }
    })

    })
}
aman().then(am).catch(amu);