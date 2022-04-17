let str="sukritan gupta jindaabad"
let reg=/aman/
// {1} means only one time preccesor comes
// reg=/suk{1}ritan/
// console.log(reg.test(str));



reg=/suka{0,1}ritan/
console.log(reg.test(str));