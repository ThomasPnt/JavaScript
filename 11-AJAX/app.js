var tip = new XMLHttpRequest()
var data = document.getElementById('result');


tip.open('GET','https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json', true );
tip.send();

tip.onreadystatechange = function () {
  if (tip.readyState === 4 ) {
  console.log(tip.responseText);
  data.innerHTML = tip.responseText;
  }
}
