// rozdíl mezi keyup a keydown
console.log("funguju")

/* document.addEventListener("keydown", (udalost) => {
    console.log(udalost.code)
    console.log(udalost.ctrlKey)
    vypis.innerHTML += `<li>Nastala keydown ${udalost.code}</li>`
    if (udalost.code === "KeyC" && udalost.ctrlKey){
        vypis.innerHTML += `<li>Nastala kombinace ${udalost.code}+${udalost.ctrlKey}</li>`
    }
}) */

/* document.addEventListener("keyup", () => {
    vypis.innerHTML += "<li>Nastala keyup</li>"
})

document.addEventListener("keypress", () => {
    console.log("nastal keypress")
}) */





// ********** POLE *****************

/* const piskvorky = [
    [" ", "x", "o"],
    [" ", "o", "o"],
    [" ", " ", " "]
]

console.log(piskvorky[0])
console.log(piskvorky[0][1])
piskvorky[2][1] = "x"
console.log(piskvorky) */


/* 
unshift ->   ****   <- push -------tyto funkce jsou s parametrem! 
  shift <-   ****   -> pop  -------tady odebiram prvni prvek
  
*/

/* //fronta v divadle
const fronta = []
fronta.push("Kristýna")
fronta.push("Filip")
fronta.push("Iveta")
fronta.push("Terka")
//funkce jestli fronta obsahuje dany prvek
fronta.includes("Filip")
fronta.includes("Martin")
//neni tam a chce na zacatek
fronta.unshift("Martin")
//na jaké pozici je ve fronte Filip:
fronta.indexOf("Filip")


//rozlozeni divadla
const divadlo = {
    prizemi: [],
    balkon: [],
    kralovskeLoze: null
}

let osoba
osoba = fronta.shift()
divadlo.kralovskeLoze = osoba

osoba = fronta.shift()
divadlo.balkon.push(osoba)

osoba = fronta.shift()
divadlo.prizemi.push(osoba)

console.log(divadlo.prizemi)

osoba= fronta.shift()
divadlo.balkon.push(osoba)

console.log(fronta.length)

osoba = fronta.shift()
divadlo.balkon.push(osoba) */







//     CVICENI 





/* 
Pole v divadle
pohodička
Celé toto cvičení prováďejte v JavaScript konzoli.

Vytvořte nějaké pole celých čísel, například počty diváků na několika 
po sobě jdoucích divadelních představeních. Použije metodu push a 
přidejte do pole počet diváků na novém představení.
Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v
několika po sobě jdoucích představeních.
Vytvořte nějaké pole řetězců, například seznam názvů několika
divadelních představení, která divadlo hraje. Uložte toto pole do proměnné 
plays. Uložte do nějaké proměnné druhou položku tohoto pole. Pomocí metody 
shift odstraňte z pole první představení, které už divadlo nehraje.
Do proměnné reviews uložte pole hodnocení, které obdržela divadelní hra 
Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy 
dvouprvkové pole obsahující název recenzního časopisu jako řetězec a 
samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody unshift přidejte 
na začátek nové hodnocení z časopisu Divadelní oběžník.
*/

/* let divaci = [60, 40, 30, 20]
divaci.push(40)

let zaplnenost = [1.2, 1.5, 1.8]

let plays = ["Dracula", "Krysař", "Carmen"]
const druhaHra = plays[1]
plays.shift()

let reviews = [
    ["Hra 1", 5],
    ["Hra 2", 3],
    ["Hra 3", 7],
    ["Hra 4", 9],
]
reviews.unshift(["Divadelni Obežník", 8]) */




//    ŠACHY 
/* let sachy = [
    ["0", "0", "0", "0", "0", "-4", "-6", "0"],
    ["0", "0", "0", "0", "0", "-1", "-1", "-1"],
    ["0", "0", "-1", "0", "0", "0", "0", "0"],
    ["0", "-1", "1", "0", "-1", "0", "0", "0"],
    ["0", "1", "0", "0", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "3", "0", "1"],
    ["0", "0", "0", "0", "2", "1", "1", "0"],
    ["0", "0", "0", "0", "0", "0", "6", "0"]
]

sachy[5][5] = "0" //odeberu bíleho kone z f3
sachy[4][3] = "3" */








//         CYKLUS WHILE

/* let pokus = prompt("jaké je tvoje tajné heslo")
const heslo = "bobík"
let pocetPokusu = 1

while (pokus !== heslo) {
    pocetPokusu += 1
    console.log(pocetPokusu)
    alert("Spatne heslo, zkus to znova")
    pokus = prompt("další pokus, napiš heslo")
}
alert("jabadabadůůů, jen na "+pocetPokusu+ " pokusů")
console.log(pocetPokusu) */


/* Počítání pomocí WHILE
to dáš
Založte JavaScriptový program, který provede následující instrukce.*/

/* Vypište do konzole text První WHILE cyklus. Pomocí cyklu WHILE vypište 
všecha čísla od jedné až do sta. */
/* 
let cislo = 0
while (cislo <= 100){
    console.log("Prvni While cyklus " + cislo)
    cislo ++
} */

/* for (i = 0; i<= 100 ;i++){
    console.log("Prvni While cyklus " + i)
} */

/* Vypište do konzole text Druhý WHILE cyklus. Pomocí cyklu WHILE vypište 
všechna sudá čísla od jedné až do sta. */
/* 
let cislo = 0
while (cislo <= 100){
    console.log("Druhý While cyklus " + cislo)
    cislo += 2
} */

/* for (i = 0; i<= 100 ;i+=2){
    console.log("Druhý While cyklus " + i)
} */


/* Vypište do konzole text Třetí WHILE cyklus. Pomocí cyklu WHILE vypište 
všechna sudá čísla pozpátku od sta až k nule. */
/* let cislo = 100
while (cislo >= 0){
    console.log("Treti While cyklus " + cislo)
    cislo -= 2
} */

/* for (i = 100; i>= 0 ;i-=2){
    console.log("Třetí While cyklus " + i)
} */




/* Uživatelé
to dáš
Založte JavaScriptový program s následujícím seznamem uživatelů.

const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa'];
Pomocí cyklu FOR vypište všechna tato jména do konzole.
Do konzole vypište všechna jména jako emailové adresy z domény gmail.com. Uživatel 
'paja' tak bude paja@gmail.com.
Vypište do konzole e-maily pouze těch uživatelů, jejichž jméno má nejvýše 4 znaky.
*/
/* const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa']

for (i=0; i<users.length; i++){
    //console.log(users[i])
    if (users[i].length<5){
        console.log(`${users[i]}@gmail.com`)
    }
} */




/* Pohyby na účtu
zapni hlavu
Založe JavaScriptový program s následujícím s záznamem vkladů a výběrů na 
nějakém bankovním účtu.

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300]
Napište cyklus FOR, který spočítá výsledný zůstatek na účtu za předpokladu, 
že na účtu byla na začátku nula.
Zůstatek vypiště do konzole a ověřte, že vám správně vyšel 2320.
Napište cyklus WHILE, který zjistí číslo pohybu, ve kterém se účet dostal 
poprvé do mínusu. Vypište jak číslo pohybu, tak výši záporného zůstatku.
Výpis se spočtenými hodnotami by měl obsahovat zmínku, že se účet dostal 
na hodnotu -1250 po páté transakci.*/

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300]

/* let castka = 0
for (i = 0; i < amounts.length; i++){
    castka += amounts[i]
}
console.log(castka) */

/* let i = 0
let castka = 0

while (i<amounts.length){
    castka += amounts[i]
    i++
    if (castka<0){
    console.log(`${i}krok s castkou ${amounts[i]} me dostala do minusu ${castka}`)
    }
} */






/* 
Nákupní seznam
to dáš
Mějme pole řetězců představující nákupní seznam

const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
Napište cyklus, který projde celé toto pole a všechny položky spojí dohromady 
do jednoho velkého řetězce jako níže. A výsledek vypište do konzole.

'moukamáslocukrjablkaskořice'
Upravte váš program tak, že výsledný řetězec bude vypadat takto:

'mouka,máslo,cukr,jablka,skořice'
Upravte váš program tak, aby výsledný řetězec obsahoval HTML značky.

'<li>mouka</li><li>máslo</li><li>cukr</li><li>jablka</li><li>skořice</li>'
Vytvořte někde na stránce prázdný číslovaný seznam ol a pomocí vlastnosti 
innerHTML do něj vložte řetězec sestavený v předchozím kroku.
*/
const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
let seznam = ""

/* for(i = 0; i< list.length; i++){
    seznam += list[i]
    console.log(seznam)
} */

/* for(i = 0; i< list.length; i++){
    seznam += list[i]+", "
    console.log(seznam)
} */

/* const vypis = document.querySelector("#vypis")

for(i = 0; i< list.length; i++){
    vypis.innerHTML += `<li> ${list[i]} </li>`
} */



/* Nákupní seznam jako funkce
to dáš
Vytvořte funkci s názvem shoppingList, která na vstupu obdrží pole 
řetězců, představující nákupní seznam. Funkce vrátí řetězec obsahující 
prvky tohoto seznamu zabalené do HTML značek li.

Příklad použití:

> shoppingList(['špagety', 'kečup', 'sýr']);
'<li>špagety</li><li>kečup</li><li>sýr</li>'
Upravte výsledek předchozího cvičení tak, že obsah číslovaného seznamu 
vytvoříte voláním funkce shoppingList.
*/
const vypis = document.querySelector("#vypis")
const shoppingList = (list) => {
    for(i = 0; i< list.length; i++){
        vypis.innerHTML += `<li> ${list[i]} </li>`
    }

}

shoppingList(['mouka', 'máslo', 'cukr', 'jablka', 'skořice', "ředkvičky"])