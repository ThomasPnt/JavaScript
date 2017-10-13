var Character = {
                name: 'Thomas',
                age: 21,
                items_to_give : ['Ballon','Cerveau','Voiture'],
}
for ( i in Character) {
  document.getElementById("test").innerHTML += i + "</br>"  ;
}

var rand = Character.items_to_give;

function giveItem () {
  var giveItem = rand[Math.floor(Math.random() * rand.length)];
  console.log(giveItem);
}

console.log(giveItem());
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
            { nom : 'Bouclier',
              physic : 5,
              magic : 5,
              minLevel : 9,
              available : true
},
            { nom : 'Masse',
              physic : 15,
              magic : 0,
              minLevel : 12,
              available : false
},
            { nom : 'Lance',
              physic : 20,
              magic : 10,
              minLevel : 17,
              available : true
},
            { nom : 'Bâton',
              physic : 10,
              magic : 20,
              minLevel : 15,
              available : true
}];

console.log(shop);

function affiche_Objet() {
  var nameShop = shop.nom;
  console.log(nameShop);
}

console.log(affiche_Objet());
