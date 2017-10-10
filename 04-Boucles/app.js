var i = 0

while ( i <= 20 ) {
  console.log(i)
  if (i % 2 == 0) {
    console.log('est pair')
  }
  i = i + 1
}

for (var i = 0; i < 11 ; i++){
  console.log(i * 9);
}

/*DEMANDER A BERTRAND*/

for (var i = 0 ; i < 101 ; i++ ){
  if (i <= 100 && i > 90){
    console.log('Pour '+i+' points vous avez le grade A!');
  } else if (i <= 90 && i > 81) {
    console.log('Pour '+i+' points vous avez le grade B!');
  } else if (i <= 80 && i > 71) {
    console.log('Pour '+i+' points vous avez le grade C!');
  } else if (i <= 70 && i >= 65) {
    console.log('Pour '+i+' points vous avez le grade D!');
  } else {
    console.log('Pour '+i+' points vous avez le grade F!');
  }
}

function grade(i){
  while (i < 101) {
      if (i <= 100 && i > 90){
      console.log('Pour '+i+' points vous avez le grade A!');
    } else if (i <= 90 && i > 81) {
      console.log('Pour '+i+' points vous avez le grade B!');
    } else if (i <= 80 && i > 71) {
      console.log('Pour '+i+' points vous avez le grade C!');
    } else if (i <= 70 && i >= 65) {
      console.log('Pour '+i+' points vous avez le grade D!');
    } else {
      console.log('Pour '+i+' points vous avez le grade F!');
    }break
  }
}

grade(70);

var star ="";
for (var i = 0 ; i < 6 ; i++) {
 console.log(star);
 star = star+"* ";
}
