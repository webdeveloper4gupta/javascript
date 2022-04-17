let a=new Set()
console.log(a);
a.add(12);
a.add(13)
a.add(15)
a.add(16)
a.add([1,2,3,4,5])
console.log(a)
console.log(a.size)
// delete elemnt
a.delete(12)
console.log(a)

// type of set
console.log(typeof(a))

// for -of  loop
for(i of a){
    console.log(i)
}