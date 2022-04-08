/* 
validator JS

kontrola vstupu od uživatele
<script src="https://unpkg.com/validator@latest/validator.min.js"></script>

validator.isEmail('pepa.novak@seznam.cz')

*/


/**
Základní validace

Vytvořte prázdnou stránku, do které vložte knihovnu validator.js a 
svůj JavaScript index.js.
Otevřete stránku v prohlížeči a v konzoli pomocí metody validator.isEmail 
ověřte svoji e-mailovou adresu.
Pokud máte po ruce svoji platební kartu, ověřte v konzoli, že má platné
číslo pomocí metody isCreditCard.
Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu 
pro uživatele.
<p id="msg" class="msg"></p>
Pomocí funkce prompt požádejte uživatele o jeho e-mail. V případě, že 
jde o platný e-mail, zobrazte v připraveném odstavci zprávu "E-mail v 
pořádku". V opačném případě zobrazte "Neplatný e-mail".
Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu 
msg--valid. V opačném případě použijte třídu msg--invalid. Přidejte do 
stránky soubor style.css a třídy nastylujte například tak, že msg--valid 
bude mí zelené pozadí a msg--invalid naopak červené.
 */

const email = prompt("zadej svůj email")

let zprava = document.querySelector('.msg')

if (validator.isEmail(email)){
    console.log("ok")
    zprava.innerHTML = `${email} " email je v pořádku"`
    zprava.classList.add("msg--valid")
} else { 
    zprava.innerHTML = `${email} " neplatný email"`
    zprava.classList.add("msg--invalid")
}