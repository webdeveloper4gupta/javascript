function aman(name,rollno){
    this.name=name;
    this.rollno=rollno
}
aman.prototype.setname=function(){
    this.name="sukritan"
}
a=new aman("sukritan",20051871);
console.log(a)
function suk(name,rollno,sec){
    aman.call(this,name,rollno);
    this.sec=sec;
}
suk.prototype=Object.create(aman.prototype)
sukri=new suk("suk",20051874,"cse11");

console.log(sukri)