var message = "";
var essai = 0;
var numMin = 20;
var numMax = 80;

function numAleatoire() {
   console.log((Math.floor((Math.random()*(numMax-numMin))+numMin)));
}

var win = numAleatoire();

function victoire() {
  console.log("C'est juste tu as trouvé en "+essai+" coups!");
  document.write("C'est juste tu as trouvé en "+essai+" coups!");
}

function principal() {
  var input = window.prompt(' Trouve le nombre entre 20 et 80');
  essai + 1;
    if (input == win) {
      victoire();
    }
    else if (input > win) {
      window.alert("C'est moins");
      principal();
    }
    else if (input < win) {
      window.alert("C'est plus");
      principal();
    }
}

principal();

//Comprend pas pourquoi ca marche pas
