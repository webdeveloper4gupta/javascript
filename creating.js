let a=document.getElementById("aman1");
let b=document.createElement("b");
b.className="sukritan50";
b.id="sukri50";
b.setAttribute("style",'color=green');
b.innerHTML="this is mahajan web developer";
a.appendChild(b);

// insertBefore
// a.insertBefore(b,a.children[1])

// insertAfter
// a.insertAfter(b,a.children[1]) not existing

// removing element
// a.removeChild(b)

// replace element
// let y=document.createElement("i");
// y.className="mahajansahab";
// y.id="suky";
// y.setAttribute("text-decoration",'underline');
// let u=document.createTextNode("you are greet");
// y.appendChild(u);
// b.replaceWith(y);


// hasAttribut
// console.log(a.hasAttribute('class'))

// attributename
// console.log(a.getAttribute('id'))

// remove attrribe
a.removeAttribute("id")

