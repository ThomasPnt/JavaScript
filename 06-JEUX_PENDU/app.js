var words = ["B","O","N","J","O","U","R"]

var game = ["","","","","","","",""]

var test = window.prompt('Donné une lettre')

function guessLetter(){
  for (var i = 0; i < words.length; i++) {
    word = words[i];
      if (test == word[i]){
       console.log(game.push[i]);
      }
      else if(game===words){
       console.log('Vous avez trouvé le mot');
      }
      else {
       var test;
      }
  }
}
