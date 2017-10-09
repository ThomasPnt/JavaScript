var less = function (a,b) {
  return a - b;
}

var add = function (a,b) {
  return a + b ;
}

var div = function (a,b) {
  return a / b ;
}

var foi = function (a,b) {
  return a * b ;
}

var fast = function (a,b) {
  return (a/b)+'Km/h';
}

var partielle ;
var totale ;

function test(partielle,totale) {
  return (100*(partielle/totale))+'%' ;
}

console.log(test(12,5));

console.log(fast(100,2));
console.log(less(100,2));
console.log(add(100,2));
console.log(div(100,2));
console.log(foi(100,2));
console.log(fast(100,10));
