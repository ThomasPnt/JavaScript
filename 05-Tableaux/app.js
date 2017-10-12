var Tab = [1,2,3,4,5,6,7,8,9]

console.log(Tab[0]);


var tot = 0;

for ( var i = 0; i <= Tab.length; i=i+1){
  tot = tot + i ;
}


console.log(tot)

//part 2

var acteurs = [
  { nom: 'Stalone',
    classement: 'premier'},
  { nom: 'Dwayne Jhonson',
    classement: 'deuxième'},
  { nom: 'Vin Diesel',
    classement: 'troisième'} ]

for ( var i = 0 ; i < acteurs.length; i++ ) {
  acteur = acteurs[i]
  console.log('Le '+ acteur.classement + ' est ' + acteur.nom + '!');
}

//part 3

var nit = ["Mario","Luigi","Peach"]
var add = ["Bowser"]

nitadd = nit.concat(add);

console.log(nitadd);

//part 3 ( 2 eme methode)

var dup = nit;
nit = dup.push('Bowser')

for ( var i = 0; i <= dup.length; i++){
  console.log(dup[i]);
}
