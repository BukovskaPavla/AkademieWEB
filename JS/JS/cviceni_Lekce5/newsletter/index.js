//Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.

const formular = document.querySelector("#formular")
const email = document.querySelector("#email")

formular.addEventListener("submit", (udalost) => {
    udalost.preventDefault() //at te neneapadne stranku znova nacist
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}.
    `
})

/* Newsletter, kontrola
to dáš
Pokračujte v příkladu Newsletter z lekce. V tomto cvičení 
zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou 
vazbu, pokud zadává neplatný vstup.

V CSS si vytvořte třídu, která dělá výrazný červený rámeček 
kolem textového políčka.

Přidejte na textové políčko posluchač události input.

Během toho, jak uživatel píše, kontrolujte, jestli náhodou 
políčko není prázdné. V takovém případě na políčko přidejte 
třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček 
odeberte.

Zobrazte červený rámeček i v případě, že zadaný e-mail 
neobsahuje zavináč. K tomu můžete použít metodu indexOf
nebo includes.
*/

email.addEventListener('input', (e) => {
    console.log("píšu :" +e.target.value)
    if (e.target.value === ""){
        email.style.add("#email")
    } else {
        console.log("píšu píšu "  +e.target.value)
    }
  });