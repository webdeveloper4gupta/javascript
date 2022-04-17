function suk(a){
    let y=0;
    return{
        nexty:function(){
            if(y<a.length){
               return{
                   value:a[y++],
                   done:false
               }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}
let b=[1,2,3,4,5]
a=suk(b)
console.log(a.nexty())
console.log(a.nexty())