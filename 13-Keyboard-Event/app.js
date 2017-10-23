var chara = document.getElementById('character');

document.addEventListener("keydown", function(event){
var input = event.key;
console.log(input);
if (event.defaultPrevented) {
  return;
}
  switch (input) {
    case '0':
      chara.style.backgroundColor = 'red';
      break;
    case '1':
      chara.style.backgroundColor = 'black';
      break;
    case '2':
      chara.style.backgroundColor = 'yellow';
      break;
    case '3':
      chara.style.backgroundColor = 'blue';
      break;
    case '4':
      chara.style.backgroundColor = 'green';
      break;
    case '5':
      chara.style.backgroundColor = 'purple';
      break;
    case '6':
      chara.style.backgroundColor = 'skyblue';
      break;
    case '7':
      chara.style.backgroundColor = 'brown';
      break;
    case '8':
      chara.style.backgroundColor = 'pink';
      break;
    case '9':
      chara.style.backgroundColor = 'maroon';
      break;
    default :
    return;
  }
event.preventDefault();
},true);

var arrowup = document.getElementById('up');
var arrowleft = document.getElementById('left');
var arrowdown = document.getElementById('down');
var arrowright = document.getElementById('right');

document.addEventListener("keydown", function(event){
var fleche = event.key;
console.log(fleche);
  if (event.defaultPrevented) {
    return;
  }
    switch (fleche) {
      case 'ArrowUp':
        arrowup.classList.add('highlight');
        break;
      case 'ArrowLeft':
        arrowleft.classList.add('highlight');
        break;
      case 'ArrowDown':
        arrowdown.classList.add('highlight');
        break;
      case 'ArrowRight':
        arrowright.classList.add('highlight');
        break;
      default:
      return;
    }
  event.preventDefault();
},true);

document.addEventListener("keyup", function(event){
var fleche = event.key;
console.log(fleche);
  if (event.defaultPrevented) {
    return;
  }
    switch (fleche) {
      case 'ArrowUp':
        arrowup.classList.remove('highlight');
        break;
      case 'ArrowLeft':
        arrowleft.classList.remove('highlight');
        break;
      case 'ArrowDown':
        arrowdown.classList.remove('highlight');
        break;
      case 'ArrowRight':
        arrowright.classList.remove('highlight');
        break;
      default:
      return;
    }
  event.preventDefault();
},true);
