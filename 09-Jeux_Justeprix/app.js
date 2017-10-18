var message = "";
var essai = 0;
var numMin = 20;
var numMax = 80;

function numAleatoire() {
   return (Math.floor((Math.random()*(numMax-numMin))+numMin));
}

var result = numAleatoire()

function principal() {
  var input = window.prompt('Trouve le nombre entre 20 et 80');
  essai++;
  if (input == result ) {
    victoire();
  }
  else if (input > result ) {
    window.alert("C'est moins");
    principal();
  }
   else if (input < result) {
     window.alert("C'est plus");
     principal();
  }
  else if (input = isNaN) {
    window.alert("Lis les règles");
    principal();
  }
}

function victoire() {
  console.log("C'est juste tu as trouvé en "+essai+" coups!");
  window.alert("C'est juste tu as trouvé en "+essai+" coups!");
}

principal();
