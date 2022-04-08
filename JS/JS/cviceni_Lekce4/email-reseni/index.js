/* E-mail, pozdravy
pohodička
Naklonujte si repozitář se stránkou obsahující šablonu 
jednoduchého e-mailu. 
Všimněte si, že do stránky je vložený JavaScript bez 
atributu type=module. 
To nám umožní volat námi vytvořené funkce přímo z 
konzole. S tímto atributem 
by to nešlo.

Každý e-mail je třeba zakončit zdvořilým pozdravem.

V souboru index.js vytvořte funkci bez parametrů s 
názvem goodbye. Tato funkce vloží do odstavce s třídou 
email__closing rozloučení „Na shledanou“.
Otevřete stránku v prohlížeči a zavolejte funkci v 
konzoli. Ověřte, že 
správně změnila pozdrav na konci e-mailu.
Končit e-mail slovy „Na shledanou“ je nezdvořilé. Přidejte proto do 
funkce goodbye parametr představující jméno pisatele e-mailu. Funkce 
do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
> goodbye('Pavel Ovesný')
Ve stránce bude
S pozdravem Pavel Ovesný
*/

/* const goodbye =() => {
    const pozdrav = document.querySelector(".email__closing")
    pozdrav.textContent = `S pozdravem ${jmeno}`
} */




/* E-mail, tělo
to dáš
Pokračujte na stránce z přechozího příkladu.

Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. 
Tato funkce ze stránky vybere DOM element představující předmět e-mailu a 
nastaví jeho obsah na řetězec, který přišel v parametru. Zavolejte funkci 
z konzole a vykoušejte si nastavit předmět e-mailu na různé řetězce.
Napište funkci fillBody s jedním parametrem body, která ze stránky vybere 
DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty 
parametru. Funkci vyzkoušejte v konzoli.
Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody 
přidejte další parametr s názvem name. Tento parametr bude představovat 
jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing 
vloží pozdrav, který vyrobí pomocí volání funkce goodbye.
*/
/* const subject = "Neco"
const fillSubject = (subject) => {
    const predmet = document.querySelector(".email__subject")
    predmet.textContent = subject
}

const fillBody = (body, name) =>{
    const telo =  document.querySelector(".email__body")
    telo.textContent = body
    goodbye2(name)
}

const goodbye2 =(name) => {
    const pozdrav = document.querySelector(".email__closing")
    pozdrav.textContent = `S pozdravem ${jmeno}`
} */




const goodbye = (name) => {
    return 'S pozdravem ' + name;
  };

const formalGoodbye = (name) => {
    return "S uctivým pozdravem" + name
}

const rudeGoodbye = (name) => {
    return "Se měj" + name
}
  
  const fillSubject = (subject) => {
    document.querySelector('.email__subject').textContent = subject;
  };
  
  const fillBody = (body, name, goodbyeFunc) => {
    const bodyElm = document.querySelector('.email__body');
    bodyElm.innerHTML = body;
    const closingElm = document.querySelector('.email__closing');
    closingElm.textContent = goodbyeFunc(name);
  };




/* Převod měny
to dáš
Napište funkci convertToCZK, která převede částku zadanou v cízí měně 
na české koruny. Funkce bude podporovat následující měny a kurzy.

Měna	Kód	Kurz
Euro	EUR	24.42
Britská libra	GBP	28.98
Americký dolar	USD	22.07
Bitcoin	BTC	1010077
Výslednou částku zakrouhlete na celé koruny. Příklad použití:

> convertToCZK(25, 'EUR')
675
Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek 
null. Otestujte funkci v konzoli.*/
