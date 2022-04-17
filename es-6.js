// class aman{
//     constructor(name,rollno,id){
//         this.name=name;
//         this.rollno=rollno;
//     }
//     slogan(){
//         console.log("this is slogan");
//     }
//     m (){
//         console.log("aman gupta jindabad");
//     }
// }
// a=new aman("sukritan",20051817)
// console.log(a)
// a.slogan()
// a.m()

class employee{
    constructor(name,experince,division){
        this.name=name;
        this.experince=experince;
        this.division=division;
    }
    slogan(){
        return "hello";
    }
     aman(){
         return "JAMMU";
     }
     static add(a,b){
         return a+b;
     }
}
aman=new employee("sukritan",12,"cse");
console.log(aman);
console.log(aman.slogan());
console.log(employee.add(1,2));
//inheritance
class programmer extends employee{
    constructor(name,experince,division,language){
        super(name,experince,division);
        this.language=language;
    }
     favourite(){
        if(this.language=='python'){
            return 'python';
        }
        else{
            return  'javascript';
        }
    }

}
rohan=new programmer('aman',23,'lays','javascript');
console.log(rohan)
console.log(rohan.favourite());