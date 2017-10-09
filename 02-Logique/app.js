//part 1

var lang = prompt('choississez votre language (en,fr,es)');
var msg;

switch (lang) {
  case "fr":
    msg = 'Bonjour tout le monde';
  break;

  case "en":
    msg = 'Hello world';
  break;

  case "es":
    msg = 'Hola Mundo';
  break;
}

alert(msg);

//part 2

var score = 60;
var result;

if (score >= 90) {
  result='Vous avez le rang A';
}

if (score < 90) {
  result='Vous avez le rang B';
}

if (score <= 50) {
  result='Vous avez le rang C';
 }

alert(result);

//part 3

var word = 'légume';
var nbr = '5';
var line ;

if (nbr > 1 ) {
  line = word+"s";
} else {
  line = word;
}

alert(line);
