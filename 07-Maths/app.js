var a = [7,5,-12,6,32,18,14,-2];
var b = [-3,9,21,36,27,54,17,35];

let vara = Math.min(...a);
console.log(vara);
let varb = Math.max(...b);
console.log(varb);

//exercice 2

let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau);
let voleBateau = Math.ceil(floatBateau);

console.log(couleBateau);
console.log(voleBateau);

//exercice 3

// random entre 50 et 100

let randFifty = Math.floor((Math.random()*50) + 50);
console.log(randFifty);

// random entre 1 et 0
let randOne = Math.floor((Math.random() * 2)  + 0);
console.log(randOne);


//exercice 4

let nom = ['Goro','Johnny Cago','Kano','Liu Kano','Raiden','Reptil','Scorpion','Shang Tsun','Sonya','Sub-Zero'];
var randName = nom[Math.floor(Math.random() * nom.length)];
console.log(randName);
