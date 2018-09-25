// var a =1;
// function b() {
//   console.log(a);
//   a=10;
//   return function a(){}
  
// }
// b();
// console.log(a);

// //closure: encapsulation.

function reversStr(str) {
  if (str === "")
    return "";
  else return reversStr(str.substr(1))+str.charAt(0);
}

var a = 'abcdefg';

console.log(reversStr(a));
