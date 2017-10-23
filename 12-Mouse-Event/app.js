var over = document.querySelectorAll('.hoverMe') ;

for (var i = 0; i < over.length; i++) {
  // over[i].style.backgroundColor = 'blue';
  over[i].addEventListener('mouseover',function(event){
    var  target = over[i];
    event.target.style.backgroundColor = 'red';

    setTimeout(function() {
      event.target.style.backgroundColor = "";
    },500);
  },false);
};

document.querySelector('#reset').addEventListener("click",function() {
  for (var i = 0; i < over.length; i++) {
    var target = over[i]
    target.style.backgroundColor = 'red';
  }
});

var ax = document.querySelector('.axe-x');
var ay = document.querySelector('.axe-y');

document.addEventListener("mousemove",function(event) {
  var x = event.clientX;
  var y = event.clientY;
  ax.innerHTML = 'Position en x = '+x;
  ay.innerHTML = 'Position en y = '+y;
})
