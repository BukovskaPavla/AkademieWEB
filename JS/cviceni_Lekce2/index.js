const person1= {
    firstName: "Pavla",
    age: 32,
    education: {
        name: "VŠE",
        degree: "Bc."
    }
}

const { education } = person1

//document.body.innerHTML = `<h1> Ahoj ${person1.firstName} </h1>`



/*
1. Vlastnosti a metody

V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu. Proveďte následující úkoly.

a) Vypište do konzole počet znaků názvu.
b) Převeďte název filmu na velká písmena.
c) Vyřízněte z názvu prvních pět písmen.
d) Vyřízněte z názvu posledních pět písmen.
*/

/*
const title = "Jedna ruka netleská"
console.log(title.length)
console.log(title.toUpperCase())
console.log(title.slice(0,5))
console.log(title.slice(title.length-5))
*/



/*
2.Emaily

Vytvořme stránku, která bude pracovat s emailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com

Postupujte dle následujících kroků.
    a. Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
    b. Nechte uživatele zadat jeho email a uložte si jej do proměnné email.
    c. Pomocí metody indexOf najděte v tomto emailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
    d. Pomocí metody slice vyřízněte z emailu první část představující jméno a příjmení uživatele.
    e. Dále z emailu vyřízněte název domény tedy například gmail.com.
    f. Ve získaných informací vytvořte objekt, který bude vypadat například takto:
        const parsedEmail = {
        userName: 'slavomir.ponuchalek',
        domain: 'yahoo.com',
        }
    g. Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/

/*
const email = prompt("Zadejte prosím váš email.")
const atIndex = email.indexOf("@")
const jmeno = email.slice(0, atIndex)
const domena = email.slice(atIndex+1)
console.log(jmeno)
console.log(domena)
const parsedEmail = {
    userName: jmeno,
    domain: domena,
    }
document.body.innerHTML = `<div class="email">
    <p>email: ${email}<p>
    <p>jmeno: ${jmeno}</p>
    <p>domena: ${domena}</p>
    </div>`
*/



/*
3. Doručování

Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení 
objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

a. Uložte všechny údaje do vhodně pojmenovaných proměnných.
b. Ze zadanách údajů sestavte pomocí interpolace řetězec obsahující HTML ve formátu 
    jako níže
    <div class="address">
    <p>Pod Stájemi 67<p>
    <p>12754 Klysnov</p>
    </div>
c. Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
*/

/*const ulice = prompt("zadej název ulice")
const cisloDomu = prompt("zadej cislo domu")
const mesto = prompt("zadej mesto")
const psc = prompt("zadej psc")

document.body.innerHTML = `<div class="address">
    <p>${ulice} ${cisloDomu}<p>
    <p>${psc} ${mesto}</p>
    </div>`
    */




/*
4. Registrace na očkování

V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli 
jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také 
heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení 
do systému.

Jakmile uživatel zadá věk, zkontrolujte, že je větší nebo roven 65. Pokud ano, 
vypište do stránky "věk v pořádku".
Pokud uživatel nemá alespoň 65 let, vypište "nízký věk".
Jakmile uživatel zadá heslo, zkontrolujte, že je delší než osm znaků. Pokud 
není, vypište "slabé heslo".
*/

/*const vek = prompt("zadej vek")
if (vek >= 65) {
    document.body.innerHTML = `<p>věk v pořádku</p>`
    const hesloUzivatel = prompt("Heslo")
    if (hesloUzivatel.length < 8 ) {
         document.body.innerHTML += `<p>Slabé heslo</p>`
        } else {
    document.body.innerHTML += `<p>Heslo je v správně</p>`
        }
} else {
    document.body.innerHTML = `<p>nízký věk</p>`
}
*/






/*
5. Cena vstupenky

Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla. 
Založte si webovou stránku s JavaScriptem. Nechte uživatele zadat svůj věk. 
Vytvořte si proměnnou plnaCena, do které uložte hodnotu 12. Vytvořte podmínku, 
která do proměnné cena uloží cenu spočítanou podle věku uživatele dle 
následujících pravidel

0 euro pro návštěvníky mladší 6 let,
65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
50 % ze základní ceny pro ostatní (senior).
Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých centech.

Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
*/

/*const vek = Number(prompt("Zadej věk"))
const plnaCena = 12
let cena = 0

if (vek < 6) {
    cena = 0
} else if (vek < 27) {
    cena = Math.round(plnaCena*0.65)
} else if (vek > 64) {
    cena = Math.round(plnaCena*0.5)
} else {
    cena = plnaCena
}
document.body.innerHTML = `<p>váš věk je ${vek} a cena vstupného je ${cena}</p>`
*/




/* ------Doporučené úkoly -------*/



/*
FIT Email

Pokud se přihlásíte jako student například na Fakultu Informačních 
Technologí ČVUT, bude vám informačním systémem automaticky přidělen email, 
který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět 
prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na 
malá písmena a připojí se doména fit.cvut.cz. Pro jméno Žaneta Procházková 
tak vznikne adresa prochzan@fit.cvut.cz.

Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní 
jméno a pak příjmení, obojí bez diakritiky.
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku
ani na konci žádné bílé znaky.
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do 
stránky.
 */


/*
const jmeno = prompt("Zadej svoje jméno").trim().slice(0,3)
const prijmeni = prompt("Zadej svoje prijmeni").trim().slice(0,5)
const domena = "@fit.cvut.cz"
document.body.innerHTML = `<p>Váš email je ${prijmeni}${jmeno}${domena}`
*/






/*
Množstevní slevy

Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu 
objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. 
Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce 
nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za 
tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce 
objednat, a program odpoví celkovou ceny objednávky.
*/

/*const objednavka = Number(prompt("Kolik triček si chcetet objednat?"))
let cena = 0
let celkovaCena = 0
if (objednavka < 50) {
    cena = 300
    celkovaCena = cena * objednavka
} else if (objednavka < 200){
    cena = 250
    celkovaCena = cena * objednavka
} else if (objednavka < 500){
    cena = 200
    celkovaCena = cena * objednavka
} else if (objednavka < 1000){
    cena = 150
    celkovaCena = cena * objednavka
} else {
    cena = 120
    celkovaCena = cena * objednavka
}

document.body.innerHTML = `<p>Při objednávce ${objednavka} je cena za kus ${cena} a celková cena je tedy ${celkovaCena}</p>`
*/


/* ------ Volitelné úkoly -----*/


/*
Ruleta

Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta 
obsahuje čísla 0 - 36. Každé číslo s výjimkou nuly je buď sudé nebo liché 
a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že lichá
čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo,
tedy lichá jsou černá a sudá červená. Nula není ani lichá ani sudá, ani 
černá ani červená.

Ruleta
Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o 
číslo sudé nebo liché, černé nebo červené, nebo je to nula.
*/


/*const ruleta = Number(prompt("Zadej číslo na ruletě 0 - 36"))
let vysledek = ""

if (ruleta === 0){
    vysledek = "zelená"
} else if (ruleta <= 10){
    if (ruleta % 2 === 0) {
        vysledek = "černá"
    } else {
        vysledek = "červená"
    }
} else if (ruleta <= 18){
    if (ruleta % 2 === 0) {
        vysledek = "červená"
    } else {
        vysledek = "černá"
    }
} else if (ruleta <= 28){
    if (ruleta % 2 === 0) {
        vysledek = "černá"
    } else {
        vysledek = "červená"
    }
} else if (ruleta <= 36){
    if (ruleta % 2 === 0) {
        vysledek = "červená"
    } else {
        vysledek = "černá"
    }
} else {
    vysledek = "špatný hod"
}

document.body.innerHTML = `<p>Hodil jsi ${ruleta} a to je ${vysledek}</p>`
*/




/*
Přestupný rok

Napište program, který po zadání kalendářního roku vypíše, zda jde o 
rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný 
čtyřmi. Roky, které jsou dělitelné 100 jsou ovšem přestupné pouze tehdy, 
jsou-li zároveň dělitelné 400.
*/



const rok = Number(prompt("zadej kalendářní rok."))
let vysledek = "nepřestupný"
if (rok % 100 === 0) {
    if (rok % 400 ===0){
        vysledek ="přestupný"
    } 
} else if (rok % 4 === 0){
    vysledek = "přestupný"
}
document.body.innerHTML = `<p>${rok} je ${vysledek}</p>`






/*
Přestupný rok 2

Napište program, který po zadání kalendářního roku vypíše, zda jde o rok 
přestupný, či nikoliv. Pro výpis použijte funkci document.body.innerHTML. 
Smíte ji však v programu použít pouze dvakrát.
*/





/*
Přestupný rok 3

Napište program, který po zadání kalendářního roku vypíše, zda jde o rok 
přestupný, či nikoliv. Pro výpis použijte funkci document.body.innerHTML. 
Smíte ji však v programu použít pouze dvakrát. Zároveň v kódu nesmíte použít 
víc než dva logické operátory.
*/

/* const rok = Number(prompt("zadej kalendářní rok."))
let vysledek = "nepřestupný"

if (rok % 100 === 0 ){
    if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0){
        vysledek = "přestupný"
    } else vysledek="nepřestupný"
}
document.body.innerHTML = `<p>${rok} je ${vysledek}</p>` */


/* const rok = Number(prompt("zadej kalendářní rok."))
let vysledek = "přestupný"

if (rok % 100 !== 0){
    if (rok % 4 !== 0){
        vysledek = "ne" + vysledek
    } 
} else if (rok % 400 !== 0){
    vysledek = "ne" + vysledek
}
document.body.innerHTML = `<p>${rok} je ${vysledek}</p>`
 */

/* 
if (rok % 100 === 0) {

    if (rok % 400 ===0){
        vysledek = "ne" + vysledek
    } 
} else if (rok % 4 === 0){
    vysledek = "ne" + vysledek
}
    
document.body.innerHTML = `<p>${rok} je ${vysledek}</p>`
*/