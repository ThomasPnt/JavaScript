var message;
var essai;
var numMin = 20;
var numMax = 80;

function numAleatoire() {
  (Math.floor((Math.random()*(numMax-numMin))+numMin));
}

var win = numAleatoire(numMin,numMax);

function victoire() {
  console.log("C'est juste tu as trouvé en "+essai+" coups!");
  document.write("C'est juste tu as trouvé en "+essai+" coups!");
}

function principal() {
  var message = window.prompt('Trouve le nombre entre 20 et 80');
    if(message==win) {
      victoire();
    } else if (message > win) {
        console.log("C'est moins");
        principal();
    } else if (message < win) {

    }
}
