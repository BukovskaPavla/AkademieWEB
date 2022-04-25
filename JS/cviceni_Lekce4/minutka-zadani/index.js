/* Minutka
to dáš
Naklonujte si repozitář pro stránku s kuchyňskou minutkou. 
Využijte funkci setTimeout ke splnění následujících úkolů.


Zařiďte, aby minutka začala zvonit za pět vteřin po 
otevření stránky. Zvonění zařídíte tak, že k elementu 
budíku přídáte CSS třídu alarm--ring.

Nechte uživatele skrze prompt zadat kolik vteřin má 
uplynout než minutka začne zvonit.

Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat 
audio element a zavolat na něm metodu play. Abyste zvuk 
slyšeli, musíte po zadání času na stránku kliknout. 
Prohlížeč Chrome totiž brání stránkam přehrávat audio 
či video dokud uživatel se stránkou nějak neinteragoval.

Přidejte na stránku tlačítko, které umožní odpočet minutky 
zrušit dřív, než začne zvonit. */


const zazvon = () => {
    const alarm = document.querySelector(".alarm").classList.add("alarm--ring")
    const audio = document.querySelector("audio").play()
}
const doba = Number(prompt("Za jak dlouho mám zazvonit? (sekudny)"))*1000

setTimeout(zazvon, doba)

document.querySelector("#konec").addEventListener("click", () =>
    clearTimeout(setTimeout)
)


/*const zazvon = () => {
    document.querySelector('.alarm').classList.add('alarm--ring')
    document.querySelector('audio').play()
} 

const doba = prompt("Za jak dlouho má minutka zazvonit? V sekundách, prosím.", "5")
const alarmHandle = setTimeout(zazvon, Number(doba) * 1000)

document.querySelector('#stop')
    .addEventListener('click', () => clearTimeout(alarmHandle))*/
