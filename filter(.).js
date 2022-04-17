let a=[1,2,3,4,5]
b=a.filter((e)=>{
  if(e%2==0){
      return e;
  }
})
console.log(b)