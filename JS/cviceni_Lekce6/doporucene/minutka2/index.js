'use strict';

console.log('funguju!');

/* Stáhněte si základ aplikace pro vylepšenou kuchyňskou 
minutku.

Umožněte uživateli zadat počet vteřin skrze připravené 
textové poličko. K získání hodnoty z políčka použijte 
vlastnost value. Nezapomeňte obsah políčka zkonvertovat 
na číslo. Minutku spusťte tlačítkem Start.

Zařiďte, aby minutka správně odpočítávala vteřiny a 
začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si 
věříte, zkuste celý program napsat rovnou bez 
nápovědy. Pokud malinko ztrácíte půdu pod nohama, 
následujte tyto kroky.

Vytvořte si proměnou time, do které uložíte 
počáteční počet vteřin zadaný uživatelem.
Při kliknutí na Start nastavte časovač pomocí 
setInterval. Ten se bude opakovat každou vteřinu 
a pokaždé sníží hodnotu v proměnné time o jedna.
Jakmile proměnná time dosáhne nuly, zapněte zvonění 
a zrušte časovač aby nezačal počítat do mínusu.*/

const zazvon = () => {
    const alarm = document.querySelector(".alarm").classList.add("alarm--ring")
    const audio = document.querySelector("audio").play()
}
const doba = Number(prompt("Za jak dlouho mám zazvonit? (sekudny)"))*1000

const casovacBtn = document.querySelector("button")
const casovacInpt = document.querySelector(".time-input")

casovacInpt.textContent = doba/1000

setTimeout(zazvon, doba)
