// now i will tell you how you fetch the data using xhar request
console.log("helo welcome ")
let a=document.getElementById("aman1");
a.addEventListener('click',()=>{
    console.log("we are going to make xhr request");
    let xhr=new XMLHttpRequest();
    xhr.open('GET','aman.txt',true);
    console.log("xhr open")
    
     xhr.onprogress=function(){
         console.log("onprogress");
     }


    xhr.onload=function(){
        if(this.status===200){
        //   a.innerHTML=this.responseText;
        console.log(this.responseText)
        }

        else{
            console.log("sorry not able to fetch the data");
        }
    }
    xhr.send()
    console.log("we are done")
});

