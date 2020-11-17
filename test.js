// window.onload=function(){
//     console.log("haha QWQ");
// }
console.log("haha QWQ");

// window.a = 10;
// console.log(window.a)

// parent.a = parent.a + 2;
// console.log('QWQ:' + parent.a)

// setTimeout(()=>{
//   console.log(window.a)
// }, 5000)

setTimeout(()=>{
  const data = { name: 'QWQ' }
  const channel = new MessageChannel()
  window.parent.postMessage(data, [channel.port2])
  console.log("posted")
}, 2500)

