// window.onload=function(){
//     console.log("haha QWQ");
// }
console.log("haha QWQ");

window.a = 10;
console.log(window.a)

window.parent.a = window.parent.a + 2;
console.log(window.parent.a)

setTimeout(()=>{
  console.log(window.a)
}, 5000)
