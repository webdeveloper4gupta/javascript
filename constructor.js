function aman(name,speed){
    this.name=name;
    this.speed=speed;
    this.run=function(){
        console.log("car is running");
    }
}
a=new aman("sukritan",345);
console.log(a)
console.log(a.run())