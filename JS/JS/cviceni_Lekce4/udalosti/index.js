/* Objednávka
pohodička
Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

Založte HTML stránku s jedním tlačítkem
<button id="btn-order">Objednat</button>
Doplňte do stránky JavaScriptový program, který zařídí, že po stisknutí tlačítka se do 
stránky za tlačítko vypíše odstavec:
<p>Objednáno</p>
Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.
Dále program upravte tak, že akce objednání se vykoná při kliknutí kamkoliv na stránku, 
nikoliv pouze na tlačítko.
*/

/* const tlacitko = document.querySelector('button')
const stranka = document.querySelector('html')
stranka.addEventListener('click', ()=>tlacitko.textContent="Objednano")
 */





/* Kontrola dostupnosti
to dáš
Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

Zařiďte, aby při načtení stránky tlačítko obsahovalo zprávu Kontroluji dostupnost…
Přidejte do stránky zpoždění pomocí funkce setTimeout, která zařídí, že 8 vteřin po 
načtení stránky se zpráva na tlačítku změní na Objednat.
Tlačítka mají speciální HTML atribut s názvem disabled. Pokud je tento atribut přítomen, 
na tlačítko se nedá kliknout. Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko 
bylo při načtení stránky nedostupné. Až po uplynutí časovače jej zpřístupněte nastavením 
vlastnosti disabled na false.
*/

const tlacitko = document.querySelector('button')
tlacitko.disabled = true;


setTimeout(() => {
    tlacitko.textContent="Objednat",
    tlacitko.disabled = false
    }, 8000)
tlacitko.addEventListener('click', ()=>tlacitko.textContent="Objednano")