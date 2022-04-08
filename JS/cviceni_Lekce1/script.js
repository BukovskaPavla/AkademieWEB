/* Výplata

Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 
265 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů 
jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte jak velkou daň 
zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.*/

//console.log("mesíční příjem " + 7*265*21 + "Kč")
//console.log("mesicni dan z prijmu na zivnostak " + Math.round(7*265*21*0.4*0.15) + "Kč")




/* Délka filmu

V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu 
Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v 
hodinách a minutách. Za použití funkcí a operátorů z této lekce spočítejte, kolik 
hodin a minut trvá film Pán prstenů: Dvě věže.*/

//console.log(Math.floor(223/60)+"hod" + 223%60 + "min")



/* Email

Vytvořte řetězec obsahující vaši e-mailovou adresu.
Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, 
vaše příjmení a koncovku @mujmail.com.*/

//console.log("bukovskapavla@gmail.com")
//console.log("bukovska"+"pavla"+"@"+"gmail.com")




/* Náhodná čísla

Založte si JavaScriptový program a pomocí document.body.innerHTML a funkce Math.random zobrazte 
na stránce náhodné číslo. Zkuste stránku několikrát po sobě obnovit a ověřte si, že pokaždé 
obdržíte jiné číslo.*/ 

//let nahodneCislo = Math.round(Math.random()*100)
//document.body.innerHTML += '<p>' + "nahodne cislo je " + nahodneCislo + '</p>'



/* Převod měny

Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.
Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 26.58 Kč. Výsledek zaokrouhlete 
na celé koruny a uložte do proměnné wageInCzk.
Vypište obsah proměnné wageInCzk do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:
Mzda v korunách: 532 Kč*/

//let wageInEur = 20
//let kurzCzkEur = 26.58
//let wageInCzk = Math.round(wageInEur * kurzCzkEur)

//document.body.innerHTML += '<h1>wageInCzk</h1>'; toto muzu dat do KONZOLE

//let vysledky = document.querySelector("#vysledky")
//vysledky.innerHTML = "Měsíční mzda v korunách "+ wageInCzk + "Kč" 
//document.body.innerHTML += '<h1>'+ "Mzda v korunách je " +  wageInCzk + '</h1>'





/* Ultramaraton

Představme si, že jste pořadatelé ultramaratonského závodu. Závod začiná ve tři hodiny odpoledne, 
což ve 24-hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin.
Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.

Založte si JavaScriptový program a uložte čas startu závodu do proměnné start. Do proměnné delka uložte 
délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion. Do proměnné konec spočítejte, 
v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky. Vyzkoušejte různé délky 
a ověřte, že váš postup funguje.*/
//let start = 15
//let bezec1 = 9
//let bezec2 = 5
//let konecBezec1 = (start + bezec1) % 24
//let konecBezec2 = (start + bezec2) % 24
//document.body.innerHTML += '<p>'+ "První běžec doběhl v " +  konecBezec1 + '</p>'
//document.body.innerHTML += '<p>'+ "Druhý běžec doběhl v " +  konecBezec2 + '</p>'





/* Příjem divadla
Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného 
přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. 
Uložte výsledek do proměnné prijem.
Divadlo se rozhodlo prodávat studentské vstupné ve výši 65% plného vstupného. Jak se změní měsíční 
příjem divadla pokud víme, že 40% návštěvníků jsou studenti?*/

//let prijemDivadla = 12 * 174 * 15

//console.log("mesicni prijem divadla je " + prijemDivadla)

//let prijemDivadlaSleva = (0.65*12)*(174*0.4)*15 + (12*174*0.6*15)

//console.log("mesicni prijem divadla se studentskyma slevama je " + prijemDivadlaSleva)





/* Schopnější zaokrouhlování
Mějme v proměnné x uloženo nějaké desetinné číslo. Pomocí funkce Math.round jej můžeme zaokrouhlit 
na celá čísla takto.

> Math.round(x)
Co kdybychom však chtěli zaokrouhlit na desetiny, setiny nebo třeba celé stovky? Napište program, 
který pomocí funkce Math.round

zaokrouhlí číslo x s přesností na desetiny,
zaokrouhlí číslo x s přesností na setiny,
zaokrouhlí číslo x s přesností na celé stovky.*/

//let cislo = 10.1559
//console.log("zaokrouhlene cislo na Celá čísla "+ Math.round(cislo))
//console.log("zaokrouhlene cislo na desetiny "+ Math.round(cislo*10)/10)
//console.log("zaokrouhlene cislo na setiny "+ Math.round(cislo*100)/100)
//console.log("zaokrouhlene cislo na stovky "+ Math.round(cislo*0.01)/0.01)




/* Házení kostkou

Vymyslete jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k 
simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který 
vygeneruje náhodné celé číslo mezi 1 a 6.

Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou 
pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) 
a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.
*/

//let hodKostkou = Math.round(Math.random()*6)
//console.log("na kostce padlo " + hodKostkou)






/* Očkování

Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého 
registrovaného chceme evidovat jméno a věk.

Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk.
Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést
na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky výstup ve tvaru
Květoslav Voňavý, věk: 67*/

//const jmeno = prompt('Zadej jméno')
//const vek = Number(prompt('Zadej věk'))
//document.body.innerHTML += '<p>'+ jmeno +", věk: " + vek+ '</p>'





/* Výplata jako stránka

Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a 
spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. 
Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, 
abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. 
Opět dejte pozor na správnou konverzi.*/ 

//const mzda = Number(prompt("Jaká je vaše hodinová sazba v korunách?"))
//let hrubaMzda = mzda * 8 * 21
//document.body.innerHTML += "<p>" + "Vaše hodinová sazba je " + mzda + "Kč, hrubá mzda je " + hrubaMzda +"Kč." + "</p>"

//const pocetHodinDen = Number(prompt("Kolik hodin denně pracujete?"))
//const pocetDniVMesici = Number(prompt("Kolik dní v měsíci pracujete?"))
//document.body.innerHTML += "<p>" + "Vaše hodinová sazba je " + mzda + "Kč, hrubá mzda je " + pocetHodinDen*pocetDniVMesici*mzda +"Kč." + "</p>"


/** Realitka

Mějme následující objekt představující inzerát na stránkách nějaké realitní kanceláře.

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte 
následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je 
do stránky.
Změnte stav inzerátu z 'free' na 'taken'.*/

/*const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  }
  */

  /* document.body.innerHTML += "<p>" + "Dispozice bytu: " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p>"  + "Čistý nájem:  " 
                                    + apartment.price.rent 
                                    + "Kč" +"</p>"
  document.body.innerHTML += "<p>" + "Výměra bytu, podlahová plocha " 
                                    + apartment.area.floorage 
                                    + apartment.area.units 
                                    + " a plocha balkonu " 
                                    + apartment.area.balcony 
                                    + apartment.area.units 
                            + "</p>"
  //Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.
  const misto = apartment
  const { city, district } = misto
  document.body.innerHTML += "<p> zeme: " + misto.city +", oblast: "+ misto.district  +"</p>"
//Změnte stav inzerátu z 'free' na 'taken'  

//apartment.status = "taken" */



/** Knihovna

V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, 
jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. 
Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i 
vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.*/

/*const knihovna = {
    kniha1:{
        nazev: "13 a 1/2 života Kapitána Modrého Medvěda",
        autor: "Walter Moers",
        pocetStran: 616,
        nazevOriginal: "Die 13 1/2 Leben des Käpt’n Blaubär",
        ISBN: "80-7197-233-9",
        rokVydani: 1999,
        detail: {
            puvodniJazyk: "němčina",
            prekladatek: "Pravoslav Prokeš",
            vazba: "pevná / vázaná s přebalem",
            vydáno: 2005,
            nakladatelství: "Beta-Dobrovský",
        },
    },
    kniha2:{
        nazev: "Hobit aneb Cesta tam a zase zpátky",
        autor: "J.R.R. Tolkien",
        pocetStran: 382,
        nazevOriginal: "The Hobbit, or There and Back Again",
        ISBN: "80-207-0262-8",
        rokVydani: 1937,
        detail: {
            puvodniJazyk: "angličtina",
            prekladatek: "František Vrba",
            vazba: "pevná / vázaná s přebalem",
            vydáno: 1991,
            nakladatelství: "Odeon",
        },
    }
}*/






/**Očkování - objekty

Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat 
na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít 
následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person v nějakém 
hezkém formátu a zkontrolujte, že obsahuje správné informace.*/

//const name = prompt('Zadej jméno')
//const old = Number(prompt('Zadej věk'))

//const pacienti = {
//    jmeno: name,
//    vek: old,
//}

//document.body.innerHTML += "<p> Pacient na očkování: " + pacienti.jmeno +", "+pacienti.vek + "</p>"





/**Formátovač data
Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok.

Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu.
28.04.2021
Vypisujte datum do webové stránky jako následující HTML kód.
<p class="date"><span class="day">28</span>.<span class="month">04</span>.
<span class="year">2021</span></p> */

/*const datum = prompt("Zadej datum ve formatu dd/mm/yyyy")
const den = datum.substring(0,3)
const mesic = datum.substring(3,6)
const rok = datum.substring(6,12)*/

/*const den = prompt("zadej číslo dne")
const mesic = prompt("zadej cislo mesice")
const rok = prompt("zadej rok")
*/
/*document.body.innerHTML += '<p class="date"><span class="day">' + den +"."
                                + '</span><span class="month">'+ mesic +"."
                                + '</span><span class="year">'+ rok + '</span></p>'*/





/**Fahrnheit vs. Celsius
Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu 
na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro 
měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení 
čekat nemilé překvapení.

Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na 
stupně Celsia a vytvořte webovou stránku, která takový převod provede. 
Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a 
pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia. */


//https://www.metric-conversions.org/cs/teplotu/celsius-do-fahrenheit.htm
//let teplotaFahrnheit = Number(prompt("Zadejte stupně Fahrenheita, které chcete převést na stupně Celsia."))

/*document.body.innerHTML += '<p>'+ "Zadaná teplota "+ teplotaFahrnheit 
                                + " ve stupních Fahrenheita odpovídá "
                                + Math.round((teplotaFahrnheit-32)/1.8)
                                + "°C" + '</p>'*/


/**Letenka

Vytvořte webovou stránku s JavaScriptem a do kódu vašeho programu vložte následující 
objekt představující reálná data o letu z Prahy do Barcelony.*/

const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia'
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain'
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    '1': 34.95,
    '2': 69.91
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20
  },
  availability: {
    seats: 2
  },
  conversion: {
    EUR: 36
  },
  quality: 66.66659,
}
/*Proveďte následující:

Vypište do stránky název startovní a cílové země.
Pomocí destrukturování uložte do separátní proměnné objekt udávající maximální 
rozměry zavazadel.
Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního 
zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.
Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých 
korunách zaokrouhleno nahoru na celé koruny.
Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal. */
const prirucni = flight.baglimit
const odbavovane = flight.baglimit
const {hand_width, hand_height, hand_length, hand_weight} = prirucni
const {hold_width, hold_height, hold_length, hold_weight} = odbavovane

document.body.innerHTML += '<p>'+ "Letadlo vylétá z " + flight.countryFrom.name
                                + " a přistane přistává v " + flight.countryTo.name
                                + '</p>'
                        + '<p>' + "Maximální rozměry příručního zavazadla je "
                                + prirucni.hand_width + "x"
                                + prirucni.hand_length + "x"
                                + prirucni.hand_height + ", a váha "
                                + prirucni.hand_weight + "kg." +'</p>'
                        + '<p>' + "Maximální rozměr odbavovaného zavazadla je "+ 
                                + odbavovane.hold_width + "x"
                                + odbavovane.hold_length + "x"
                                + odbavovane.hold_height + ", a váha "
                                + odbavovane.hold_weight + "kg." +'</p>'
                        + '<p>' + "Za druhé zavazadlo zaplatíte " 
                                + Math.round(flight.bags_price[2]*flight.conversion.EUR)
                                + "Kč." + '</p>'