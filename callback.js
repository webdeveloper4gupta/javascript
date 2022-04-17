// here i have a database of student and whenever some student add in the school i put their data on the database
let a = [
    {
        name: "sukriatan",
        rollno: 20051871
    }
    , {
        name: "aman",
        rollno: 36
    }
]

// here i used the function to enroll te student .
function enroll(student,callback){
    setTimeout(()=>{
       a.push(student);
       callback();
    },3000);
}
// this function is used to  display the data
function display(){
    let a1=document.getElementById("mahajansahab");
    setTimeout(()=>{
        let str="";
        a.forEach((s)=>{
            str+=`<li>${s.name}</li>`;
        })
        a1.innerHTML=str;
    },1000);
}

let news={
    name:"vari",
    rollno:34
}
enroll(news,display)