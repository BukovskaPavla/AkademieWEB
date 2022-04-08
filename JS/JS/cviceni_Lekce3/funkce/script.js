/*
Obsah elipsy
pohodička
Zlovolní zahrádkáři nám chtějí stížit výměru pozemků a proto si pořídíli pozemek
 ve tvaru elipsy.

Elipsa
Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina 
šířky krát polovina výšky krát číslo π.

Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea,
která spočítá plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v 
proměnné Math.PI.*/

/* const ellipseArea = (sirka, delka) => {
    return sirka/2 * delka/2 * Math.PI
}
const vysledek = Math.round(ellipseArea(Number(prompt("sirka pozemku")),Number(prompt("delka pozemku"))))

console.log(vysledek +"m2")
 */





/*
Maximum ze dvou čísel

Napište funkci max2, která vrátí větší ze dvou zadaných čísel. 
V JavaScriptu už na toto funkce existuje, jmenuje se Math.max. Pro účely tohoto 
příkladu se budeme tvářit, že o ní nevíme.
*/

/* const max2 = (cislo1, cislo2) => {
    if(cislo1 > cislo2){
        return "cislo1 je vetsi"
    } else if (cislo1 === cislo2){
        return "cisla jsou stejná"
    } else {
        return "cislo 1 je mensi"
    }
}

console.log("porovnavam cisla " + max2(15,2)) */



/*
Kontrola DIČ
zapni hlavu
Všimněte si, že knihovna validator.js v době vzniku tohoto zadání neumí ověřit platnost 
českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

CZ123456789
CZ1234567890
Postupujte dle následujících kroků.

Vytvořte prázdnou stránku s JavaScriptem a knihovnou validator.js.
Vytvořte funkci isDIC s jedním parametrem inputStr, což bude řetězec, který chceme 
zkontrolovat.
Jako první ve funkci zkontrolujte, jestli je vstupní řetězce kratší než 11 znaků. 
V takovém případě namá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte 
tady z funkce false. Tím naše funkce končí. Všimněte si, že takto používáme vzor 
"časný návrat".
Dále ve funkci zkontrolujte, jestli je vstupní řetězce delší než 12 znaků. V takovém 
případě opět vraťte false.
Dále ve funkce si do proměnné prefix uložte první dva znaky vstupního řetězce.
Pomocí podmínky zkontrolujte, že proměnná prefix obsahuje přesně znaky CZ. Pokud ne, 
ihned vraťte false.
Do promměné digits si uložte část vstupního řetězce od třetího znaku dále.
Použijte metodu validator.isInt, která umí zkontrolovat, zda řetězec obsahuje pouze 
číslice. Pokud metoda vrátí false, ihned také vraťte false.
Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit true.
Vyzoušejte svoji funkci v konzoli na různých vstupech a ověřte, že funguje.
*/

/* const isDIC = (inputStr) => {
    if (inputStr.length <11) {
        return "nejedná se o DIČ, krátké"
    } else if (inputStr.length > 12){
        return "nejedná se o DIČ, dlouhé"
    } else if (inputStr.slice(0,2) !== "CZ"){
        return "nejedná se o DIČ, nemá CZ"
    } else {
        let digits = inputStr.slice(2)
        return "Jedná se o DIČ " + digits
    }
}

console.log(isDIC("CZ1234567890")) */






/*    DOPORUČENÉ ÚKOLY     */



/* Parsování data
to dáš
Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec 
obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného 
data. Příklad použití:

> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 }
*/


/* const datum = "03.12.1989"

const parseDate = (datum) => {
    const day = datum.slice(0,2)
    const month = datum.slice(3,5)
    const year = datum.slice(6)
    return `{day: ${day}, month: ${month}, year: ${year}}`
}

console.log(parseDate(datum)) */





/* Formátování data
zapni hlavu
Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt 
představující datum v následujícím formátu.

{ day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.

> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla 
funkce použít destrukturování.
*/






/* Python zaokrouhlování
zapni hlavu
Jak jistě znalci jazyka Python dobře vědí, funkce round v tomto jazyce zaokrouhluje 
malinko jinak, než jsme zvyklí. Pokud je desetinná část čísla přesně 0.5, Python 
zaokrouhluje k nejbližšímu sudému číslu. JavaScriptová funkce Math.round naopak 
provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru. 
Někomu by se po po Pythonovském zaokrouhlování mohlo stýskat. Napište proto 
funkci jménem round, která bude zaokrouhlovat čísla na celé jednotky podle 
následujících pravidel.

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. 
Tedy například 3.5 se zaokrouhlí na 4, naopak 2.5 se zaokrouhlí na 2.
V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout 
desetinnou část čísla.
*/






/*Maximum ze tří čísel
zapni hlavu
Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte 
použití funkce Math.max.
*/

/* const max2 = (c1, c2) => {
    if(c1 > c2){
        return "cislo1 je vetsi"
    } else if (c1 === c2){
        return "cisla jsou stejná"
    } else {
        return "cislo 1 je mensi"
    }
}

console.log("porovnavam cisla " + max2(15,27)) */

/* const max3 = (c1, c2, c3) => {
    if (c1>c2 && c1>c3){
        return"
    }
} */