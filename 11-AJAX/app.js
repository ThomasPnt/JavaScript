// var tip = new XMLHttpRequest()
// var data = document.getElementById('result');
//
//
// tip.open('GET','https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json', true );
// tip.send();
//
// tip.onreadystatechange = function () {
//   if (tip.readyState === 4 ) {
//   // console.log(tip.responseText);
//   // data.innerHTML = tip.responseText;
//   }
// }

// var score = Math.floor(Math.random()*1000)+0;
// console.log(score);

var tab = function () {
  var resultat = JSON.parse(tip.responseText);
  console.log(resultat);
  call(resultat);
}

var tip = new XMLHttpRequest();
tip.onload = tab;
tip.open('GET','https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json', true);
tip.send();

var result = document.getElementsByClassName('result');


function call(resultat) {
  // function score() {
  //   Math.floor(Math.random()*1000)+0
  // }
  //
  // score()
  //
  // function bahrain(country) {
  //   return country === "Bahrain";
  // }
  resultat.forEach(function(user){
  var score = Math.floor(Math.random()*1000)+0;
  user.score = score;
  return user;

  })

  resultat.sort(function(user,user1){
  return user.score - user1.score;
  })

  var tab1 = [];
  var tab2 = [];
  var tab3 = [];

  resultat.forEach(function(user){
   if(user.score > 750) {
    return tab1.push(user);
  } else if (user.score > 500 ) {
      return tab2.push(user);
  } else {
      return tab3.push(user);
  }
  })

  console.log(tab1);
  console.log(tab2);
  console.log(tab3);

  var tab4 = [];

  resultat.filter(function(user){
    if(user.country == "Bahrain"){
      return tab4.push(user);
    }
  })
  console.log(tab4.length +' personnes vivent à Bahrain!');

  console.log(resultat[0]);
  console.log(resultat[resultat.length - 1]);
}
