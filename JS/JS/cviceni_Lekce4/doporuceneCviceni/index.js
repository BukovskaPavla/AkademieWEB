/* Výplata
to dáš
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně precujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku z
daněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

/* const salary = (wage, hours, days) => {
    const hrubaMzda = wage * hours * days
    return hrubaMzda
}

const taxed = (castka, procentoZdaneni) => {
    const dan = castka * procentoZdaneni / 100
    return dan
}

const mesicniMzda = (salary, procentoZdaneni) =>{
    const mzda = salary - (salary * procentoZdaneni / 100)
    return mzda
} */




/* Kalkulačka
to dáš
Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi 
a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, 
například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá 
náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, 
co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calc se třemi parametry num1, op a num2, které představují první zadané číslo, 
zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. 
Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

> calc(2, '+', 3)
5
> calc(3, '*', 7)
21
> calc(10, '/', 4)
2.5
*/

const calculacka = (num1, op, num2) => {
    if (op === '+') {
      return num1 + num2;
    }
    if (op === '-') {
      return num1 - num2;
    }
    if (op === '*') {
      return num1 * num2;
    }
    if (op === '/') {
      return num1 / num2;
    }
    return null;
  };


  const plus = (num1, num2) => {
    return num1 + num2;
  };
  
  const minus = (num1, num2) => {
    return num1 - num2;
  };
  
  const times = (num1, num2) => {
    return num1 * num2;
  };
  
  const divide = (num1, num2) => {
    return num1 / num2;
  };
  
  const calc = (num1, op, num2) => {
    return op(num1, num2);
  };
  


/* Ceník
zapni hlavu
Naklonujte si repozitář se stránkou, která nabízí předplatné za nějaké služby. Může jít 
například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přídá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.*/




/* Výplňořez
zapni hlavu
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý 
parametr len kladné celé číslo. Úkolem funkci je oříznout nebo prodloužit zadaný řetězec 
tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
Příklad použití:

> fillcut('petr', 8)
'....petr'
> fillcut('petr', 3)
'pet'
> fillcut('petr', 4)
'petr'
*/

const fillcut = (str,len) => {
    if (len > 0){
        if (str.length > len ){
            return str.slice(0,len)
        } else if (str.length < len){
            return str.padStart(len,".")
        } else {
            return str
        }
    } else "neplatny retezec"

}



/* Přestupný rok jako funkce
to dáš
Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. 
Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
*/
const rok = 2012
const isLeapYear = (rok) => {
  let vysledek = "nepřestupný"

  if (rok % 100 === 0 && rok % 400 ===0){
    return vysledek ="přestupný"
  } 
  else if (rok % 4 === 0){
    return vysledek = "přestupný"
  } else return vysledek



}

console.log(`2016 je ${isLeapYear(2016)}`)
console.log(`2020 je ${isLeapYear(2020)}`)
console.log(`1999 je ${isLeapYear(1999)}`)
console.log(`500 je ${isLeapYear(500)}`)