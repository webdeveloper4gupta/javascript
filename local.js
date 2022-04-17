let a=localStorage
a.setItem("name",'sukritan gi');
console.log( a)
console.log(a.getItem("name"))

// how to clear local storage
// localStorage.clear()
// how to delete one key-value pair
// localStorage.removeItem('name')


// insert array in the localstorage
let y=[1,2,3,4,5]
a.setItem('arr',JSON.stringify(y))


