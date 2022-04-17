function* number(){
    let i=0;
    // yield 1;
    // yield 2;
    // yield 3;
  while(true){
      yield i++;
  }
}

const gen=number();
console.log(gen.next());
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
// console.log(gen.next())