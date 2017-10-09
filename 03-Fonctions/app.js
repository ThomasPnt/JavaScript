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

var cent = function (a,b) {
  return ((a/100)*b)+'%';
}

var fast = function (a,b) {
  return (a/b)+'Km/h';
}

alert(fast(100,2));
alert(less(100,2));
alert(add(100,2));
alert(div(100,2));
alert(foi(100,2));
alert(cent(47,155));
