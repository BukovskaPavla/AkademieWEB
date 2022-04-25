/* Kostka
to dáš
Naklonujte si repozitář se stránkou, která zobrazuje hrací kostku. 
Doplňte do stránky JavaScriptový program, který zařídí, že když 
uživatel zmáčkne na stránce libovolnou klávesu, na kostce se 
zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

Nápověda: Rozumným postupem je vytvořit si proměnnou side, která 
bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při 
stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat 
řetězec pro atribut src. */
const kostka = document.querySelector(".dice")

let side = 1

const zvysCislo = (event) => {
    if (side < 6 ){
        side = side + 1
       return kostka.src = `img/side${side}.svg`
    } else {
        side = 1
        return kostka.src = `img/side${side}.svg`
    }
}


document.addEventListener("keydown", zvysCislo)

