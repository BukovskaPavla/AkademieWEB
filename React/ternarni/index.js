const password = prompt('Zadejte heslo:');

const valid = password.length > 8 ? 'Heslo je v pořádku': 'Heslo není bezpečné'
console.log(valid)


/* 
const grade = prompt('Počet bodů z písemky:');
let passed = null;
if (grade >= 50) {
  passed = '<span>prošel</span>';
} else {
  passed = '<span class="red">neprošel</span>';
} */


const grade = prompt('Počet bodů z písemky:');
const passed = grade >= 50 ? '<span>prošel</span>':
  '<span class="red">neprošel</span>'
console.log(passed)
