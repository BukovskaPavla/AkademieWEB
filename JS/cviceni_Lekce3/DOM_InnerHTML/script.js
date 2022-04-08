/* Opakování podmínek

const cislo1 = 20;
const cislo2 = 30;
const cislo3 = 40;

let zprava = '';

if (cislo1 > cislo2) {
  if (cislo1 > cislo3) {
    zprava = 'Číslo 1 je největší';
  } else {
    zprava = 'Číslo 3 je největší';
  }
} else {
  if (cislo2 > cislo3) {
    zprava = 'Číslo 2 je největší';
  } else {
    zprava = 'Číslo 3 je největší';
  }
}

document.body.innerHTML = zprava;
*/



const paticka = document.querySelector('.header')
paticka.textContent = "Přepiš se"
hlavicka.style.color = "red"




/* Novinky

Naklonujte si repozitář s připravenou webovou stránku, která zobrazuje 
několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly 
z tohoto cvičení proveďte v JavaScriptové konzoli.

Pomocí document.querySelector vyberte element body a uložte si jej do
proměnné bodyElm. Pomocí této proměnné nastavte barvu pozadí elementu 
na hodnotu #e9e9e9.
Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí 
na bílou a maximální šířku na 60rem.
Vyberte element h1 a nastavte mu třídu na news__title. Nadpis by měl změnit 
styl. Nastavte také obsah nadpisu na text Aktuální novinky.
Pomocí atributu id vyberte element obsahující první zprávu. Přidejte 
do jeho atributu class třídu post--main. První zpráva by tak měla mírně 
změnit svůj styl.
Vyberte obrázek v poslední zprávě a změnte jeho atribut src na obrázek 
img/zprava3-novy.jpg.
*/




/* Kvíz

Naklonujte si repozitář s kostrou stránky pro kvízové otázky. Napište 
JavaScriptový program, který vybere element s třídou question a nastaví 
jeho obsah na nějakou kvízovou otázku, například

Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně 
podal patent na zařízení, které je dnes považováno za první telefon.
Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. Vyberte 
element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. 
Vyberte element s třidou answer. Pokud je odpověď příjmení Bell, přidejte k 
tomuto elementu třídu answer--correct. V opačném případě přidejte třídu 
answer--wrong. */