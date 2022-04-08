/* Novinky
Naklonujte si repozitář s připravenou webovou stránku, která zobrazuje 
několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly 
z tohoto cvičení proveďte v JavaScriptové konzoli.

Pomocí document.querySelector vyberte element body a uložte si jej do 
proměnné bodyElm. Pomocí této proměnné nastavte barvu pozadí elementu 
na hodnotu #e9e9e9.
Do jiné proměnné vyberte element s třídou news a nastavte mu barvu 
pozadí na bílou a maximální šířku na 60rem.
Vyberte element h1 a nastavte mu třídu na news__title. Nadpis by měl 
změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
Pomocí atributu id vyberte element obsahující první zprávu. Přidejte 
do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.
Vyberte obrázek v poslední zprávě a změnte jeho atribut src na 
obrázek img/zprava3-novy.jpg.
*/

const bodyElm = document.querySelector('body')
bodyElm.style.backgroundColor = '#e9e9e9'

const newsA = document.querySelector('.news')
newsA.style.backgroundColor = "white"
newsA.style.width = '60rem'

const nadpis = document.querySelector('h1')
nadpis.classList.add('news__title')
nadpis.innerHTML = 'Aktuální novinky'


/* moje reseni:*/
/* let zprava = document.querySelector('#zprava1')
zprava.classList.add('post--main') */

/* lepsi reseni pres getElementById*/
const firstPostElm = document.getElementById('zprava1')
firstPostElm.className = '${firstPostElm.className} post--main'

/*udelat jeste img podle rodice*/
const obrazek = document.querySelector('#zprava3 .post__picture')
obrazek.src= 'img/zprava3-novy.jpg'