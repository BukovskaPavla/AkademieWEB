console.log('funguju!');

/*
Naklonujte si repozitář s kostrou stránky pro kvízové otázky. Napište 
JavaScriptový program, který vybere element s třídou question a nastaví
jeho obsah na nějakou kvízovou otázku, například:

Uveďte příjmení amerického vynálezce, který v roce 1876 jako první 
úspěšně podal patent na zařízení, které je dnes považováno za
první telefon.


Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. 
Vyberte element s třídou answer__text a nastavte obsah elementu na 
odpověď od uživatele. Vyberte element s třidou answer. Pokud je 
odpověď příjmení Bell, přidejte k tomuto elementu třídu 
answer--correct. V opačném případě přidejte třídu answer--wrong.
 */

let otazka = document.querySelector('.question')
otazka.innerHTML = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno zaprvní telefon."

let odpovedUzivatel = prompt("Jaká je vaše odpověď?")

let odpovedWeb = document.querySelector('.answer__text')
odpovedWeb.innerHTML = odpovedUzivatel

let answer = document.querySelector('.answer')

if (odpovedUzivatel === "Bell"){
    answer.classList.add('answer--correct')
} else {answer.classList.add('answer--wrong')}