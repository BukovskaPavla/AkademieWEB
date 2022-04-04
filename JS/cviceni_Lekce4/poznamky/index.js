/* Hodnota Null a  Undefined*/

/* const osoba = {
    jmeno: "Eva",
    vek: "32",
    manzel: null
}

console.log(osoba.jmeno, osoba.lastName)

/* 
const vek = 23
vysledek je undefined
vek = 23
vysledek je hodnota 23
 */

/* const zprava = document.querySelector("#message")

if (zprava === null){
    console.log("je to prazdne "+ zprava)
} else {
console.log(zprava.textContent)
}
 *///pokud bych mela preklep tak mi to vrati hodnotu null

// null a undefined jsou jen podobne, nejsou stejne. 
//pri porovnavani === nebo == mi to haze ruzne vysledky. undefined mi pro == projde */





// FUNKCE

//kus kodu, ktery muzu pouzivat opakovane
//ma ruzne vlastnosti

/* const x = 2
const y = 3

const vysledek = x + y


const scitej = (a, b) => {
    const vysledek = a + b
    return vysledek
}

console.log(scitej(2,3))
console.log(vysledek) */


/* const jednoduchaFunkce = () => {
    console.log("Jsem jednoduchá funkce")
    return
}

const funkceSParametry = (jmeno, prijmeni, rodnePrijmeni) => {
    console.log(`Osoba: ${jmeno} prijmeni: ${prijmeni}`)
}

const vysledek = jednoduchaFunkce()
const vysledekPar = funkceSParametry("Jiřina", "Boa", "Buu")
console.log(vysledekPar) */







/* Funkce vyššího řádu */

//funkce nám dává hodnotu
// funkce ktera za vstup bere funkci
    // př. rozvoz jídla