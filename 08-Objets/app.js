var myCharacter = {
                name: 'Thomas',
                age: 21,
                items_to_give : ['Ballon','Cerveau','Voiture'],
}
for ( i in myCharacter) {
  document.getElementById("test").innerHTML += i + "</br>"  ;
}

var rand = myCharacter.items_to_give;

function giveItem () {
  var giveItem = rand[Math.floor(Math.random() * rand.length)];
  console.log(giveItem);
}

giveItem(myCharacter);

// valeur undefined ! Why?

console.log(rand);

//exercice PNJ pas fini function beug!!

//exercice Shop!

var shop = [{ nom : 'Epée',
              physic : 10,
              magic : 2,
              minLevel : 3,
              available : true
},
            { nom: 'Bouclier',
              physic: 5,
              magic: 5,
              minLevel: 9,
              available: true
},
            { nom: 'Masse',
              physic: 15,
              magic: 0,
              minLevel: 12,
              available: false
},
            { nom: 'Lance',
              physic: 20,
              magic: 10,
              minLevel: 17,
              available: true
},
            { nom: 'Bâton',
              physic: 10,
              magic: 20,
              minLevel: 15,
              available: true
}];

//fonction pour afficher les objets
function affiche_Objet() {
  for ( i in shop) {
    console.log(shop[i].nom);
  }
}

affiche_Objet(shop)

//fonction pour afficher la disponibilité en fonction du niveau des objets

function peutEquiper() {
  for (var i = 0; i < shop.length; i++){
    if (shop[i].minLevel > 10){
      console.log('Tu ne peux pas équiper la ' + shop[i].nom + ' il faut être niveau '+ shop[i].minLevel + "!");
    } else {
      console.log('Au niveau 10 tu peux équiper ' + shop[i].nom +'!');
    }
  }
}

peutEquiper()

//fonction pour afficher les objets disponible

function disponibilite() {
  for (var i = 0; i < shop.length; i++) {
    if (shop[i].available == true ) {
      console.log("L'arme "+shop[i].nom+" est disponible!");
    } else {
      console.log("L'arme "+shop[i].nom+" n'est plus disponible!");
    }
  }
}

disponibilite()

//Exercice Personnage!

let mainCharacter = ({
  name: 'Thomas' ,
  level: 12 ,
  life: 140,
  weapon:   { name: "Arbalète",
            damage: 15
            },
  attack: function () {
      console.log(mainCharacter.name+" attaque avec l'arme "+mainCharacter.weapon.name+" les dégats sont de " +(mainCharacter.weapon.damage*mainCharacter.level) );
  }
});

mainCharacter.attack()

//Exercice Opponent à refaire !

let Character = { name: "Axel",
                        level: 9,
                        life: 120,
                        weapon: { name: "Epée",
                                  damage: 10,
                        } ,
                        attack: function() {} ,
                        receiveDamage: function () {}
}
