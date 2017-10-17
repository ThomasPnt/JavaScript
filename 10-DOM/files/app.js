document.body.classList.remove('bg-aqua');
document.body.classList.add('bg-olive');

var firstpara = document.getElementById('first-paragraph');
firstpara.classList.remove('bg-lime');
firstpara.classList.remove('gray');
firstpara.classList.add('aqua');

var elementsBgSilver = document.getElementsByClassName('bg-silver');
for( var i = 0; i < elementsBgSilver.length ; i++){
  elementsBgSilver[i].classList.add('bg-teal');
  elementsBgSilver[i].classList.remove('bg-silver');
}

var blockquote = document.getElementsByTagName('blockquote');
for (var i = 0; i < blockquote.length; i++) {
  blockquote[i].classList.add('bg-white');
}

var mytable = document.querySelector('#my-table');
mytable.classList.add('bg-purple');

var allpara = document.querySelectorAll('p');
for (var i = 0; i < allpara.length; i++) {
  allpara[i].classList.add('shadow');
}

var pre = document.querySelectorAll('pre');
for (var i = 0; i < pre.length; i++) {
  pre[i].style.color = "yellow";
  pre[i].style.backgroundColor = "blue";
  pre[i].style.borderTop="3px solid red";
  pre[i].style.borderBottom="3px solid red";
}

var h3 = document.querySelector('h3');
h3.innerHTML = "<em>Itelic title ! yeah !</em>";

var h2 = document.querySelector('h2');
h2.innerText = "<strong>HTML doens't work !</strong>";
h2.style.color= "yellow";

var ul = document.querySelector('ul');

var li = document.querySelector('li');
var li2 = document.createElement('li');
li2.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
li.parentElement.appendChild(li2);

var lienli = document.querySelector('li a');
lienli.style.color = "yellow";
