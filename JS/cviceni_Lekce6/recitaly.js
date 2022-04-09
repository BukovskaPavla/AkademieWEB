/* U všech následujících úryvků kódů vytvořte technický popis jejich fungování 
a zároveň zkuste odhadnout záměr daného kódu. Obě dvě části si skutečně napište
například do textového souboru.

const average = (a, b) => {
  return (a + b) / 2;
};

=>
vytvarim promennou AVERAGE, která obsahuje funkci. Do funkce vstupuji dve promenne A a B.
Funkce vrací výsledek vzorce (a+b)/2




const titleElement = document.querySelector('.title');
titleElement.textContent = 'Nadpis';

=> 
vytvarim promennou TITLEELEMENT, která odchytává DOM element class="title"
na DOM elementu TITLEELEMNT pridavam textContent, do ktereho vkladam textovy retezec "Nadpis"


let time = 0;
setTimeout(() => {
  time += 1;
  console.log('time', time);
}, 1000);

=> 
nastavuji promennou TIME na hodnotu nula
volam funkci setTIMEOUT. Jako jeji prvni parametr vkladam nepojmenovanou funkci, ktera
zvysuje globalni prommenou time o 1 a do console vypisuje retezec TIME a hodnotu promenne time.
Druhy parametr funkce setTimeout je nastaveni, za jak dlouho se funkce zavola a to za 1s.




buttonOk.addEventListener('click', () => {
  document.body.innerHTML = '<p>Everything ok</p>';
});

=>
Na promennou buttonOK pridavam posluchac, ktery reaguje na "click" a vola anonymni funkci,
ktera do tela dokumentu vlozi pres innerHTML paragraf



document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyP') {
    console.log('paused');
  }
}); 

=>
na dokument pridavam posluchac, ktery pri uvolneni klavesy vola funkci s paramentrem event.
funkce vyhodnoti podminku, pokud stisknuta klavesa je klavesa P, pak do konsole vypise "paused"
na jinou klavesu tento posluchac nezareaguje

*/