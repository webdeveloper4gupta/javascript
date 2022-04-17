// for in loop used for object and string
// let a={
//     name:"sukritan",
//     roll_no:20051871
// }
// for(i in a){
//     console.log(i)
// }

// // now i used for of in string
// let y="sukritan gupta"
// for (i of y){
//     console.log(i)
// }

// for-of 
// let a=[1,2,3,4,5,6]
// for (i of a){
//     console.log(i)
// }

// let i1="sukritan"
// for (i of i1){
// console.log(i)
// }

// in three set we for-of and in the map we used for in loop

// for-each
let a={
    name:"sukritan",
    rolllno:20051871
}
Object.keys(a).forEach(e=>{
    console.log(e)
})
Object.values(a).forEach(v=>{
    console.log(v)
})
