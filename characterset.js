let str="this is sukritan gupta"
let reg=/aman/;;

// reg=/gu[a-z A-Z]ta/
// console.log(reg.test(str))

// reg=/gu[abc]ta/
// console.log(reg.test(str))

// reg=/gu[a-z 0-9]ta/
// console.log(reg.test(str))

// ^
reg=/gu[^a-z A-Z]ta/
console.log(reg.test(str))