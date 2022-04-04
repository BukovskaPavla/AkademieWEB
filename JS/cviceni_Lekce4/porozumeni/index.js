/* Porozumění kódu
to dáš
Přečtěte si následující úryvky kódu a u každého řekněte, co program vypíše 
do stránky aniž byste program spouštěli.
*/

//Úryvek 1:

/* const name = 'Mississippi';

if (name.length > 5) {
  const name = 'Missi';
  document.body.innerHTML = `<p>${name}</p>`;
}

document.body.innerHTML = `<p>${name}</p>`; */

//dostanu:
//Mississippi


//Úryvek 2:

/* /const name = 'Franta';

const greet = (name) => {
  const name = 'Pepa';
  document.body.innerHTML = `<p>${name}</p>`;
};

greet('Jožin');  */
//chyba deklaruju name znova, když už ho tam mám
/* const name = 'Franta';

const greet = (name) => {
  name = 'Pepa';
  document.body.innerHTML = `<p>${name}</p>`;
};

greet('Jožin');
//hodí mi Pepa */



//Úryvek 3:

/* 
const age = 25;
let price

if (age > 21) {
   price = 100;
} else if (age > 15) {
   price = 50;
} else {
   price = 0;
}


document.body.innerHTML = `<p>${price}</p>`; */