var words = ["B","O","N","J","O","U","R"]

var game = ["","","","","","",""]

function guessLetter(){
  for (var i = 0; i < words.length; i++) {
    //word = words[i];
    var test = window.prompt('Donné une lettre');
    test.toUpperCase;

    for (var y = 0; y < words.length; y++) {
      if (words[y] == test){
       game[y]=test;
       console.log(game);
      }
      else if(game===words  ){
       alert('Vous avez trouvé le mot');
      }
    }
  }
}

guessLetter();
