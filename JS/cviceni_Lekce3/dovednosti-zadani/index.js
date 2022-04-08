/*
Dovednosti
to dáš
Naklonujte si repozitář, ve kterém najdete zdrojové soubory stránky 
s třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt
 požádá uživatele aby vyjářil svoji úroveň postupně ve všech 
 zobrazených dovednostech jako číslo 0 - 100. Program pak nastaví 
 posuvníky na stránce na odpovídající délku a hodnoty u posuvníků 
 na uživatelem zadaná čísla.
*/


/* A */
/* 
const urovenHtml = Number(prompt("Tvé znalosti HTML odpovídají hodnotě mezi 0-100?"))
const urovenCss = Number(prompt("Tvé znalosti CSS odpovídají hodnotě mezi 0-100?"))
const urovenJs = Number(prompt("Tvé znalosti JS odpovídají hodnotě mezi 0-100?"))

const skill1Value = document.querySelector("#skill1 .skill__value")
const skill2Value = document.querySelector("#skill2 .skill__value")
const skill3Value = document.querySelector("#skill3 .skill__value")

const skill1Progress = document.querySelector("#skill1 .skill__progress")
const skill2Progress = document.querySelector("#skill2 .skill__progress")
const skill3Progress = document.querySelector("#skill3 .skill__progress")

skill1Value.textContent = urovenHtml + " / 100"
skill2Value.textContent = urovenCss + " / 100"
skill3Value.textContent = urovenJs + " / 100"

skill1Progress.style.width = urovenHtml + "%"
skill2Progress.style.width = urovenCss + "%"
skill3Progress.style.width = urovenJs + "%" */

/* B */
/* Na samém začátku vašeho programu vytvořte funkci updateSkill, 
která bere dva vstupy: textový řetězec představující id elementu 
a číslo mezi 0 - 100. Tato funkce při zavolání nastaví posuvník 
se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem 
kódu, abyste nemuseli při nastavování posuvníků psát třikrát po 
sobě téměř stejný kód.*/



const urovenHtml = Number(prompt("Tvé znalosti HTML odpovídají hodnotě mezi 0-100?"))
const urovenCss = Number(prompt("Tvé znalosti CSS odpovídají hodnotě mezi 0-100?"))
const urovenJs = Number(prompt("Tvé znalosti JS odpovídají hodnotě mezi 0-100?"))

/* const skill1Value = document.querySelector("#skill1 .skill__value")
const skill2Value = document.querySelector("#skill2 .skill__value")
const skill3Value = document.querySelector("#skill3 .skill__value")

const skill1Progress = document.querySelector("#skill1 .skill__progress")
const skill2Progress = document.querySelector("#skill2 .skill__progress")
const skill3Progress = document.querySelector("#skill3 .skill__progress")

const updateSkills = (id, cislo, progress ) => {
    return  progress.style.width = cislo + "%",
            id.textContent = cislo + " / 100"
}

updateSkills (skill1Value, urovenHtml, skill1Progress)
updateSkills (skill2Value, urovenCss, skill2Progress)
updateSkills (skill3Value, urovenJs, skill3Progress) */


const updateSkill = (id, value ) => {
    const prvniPosuvnik = document.querySelector(`${id} .skill__progress`)
    prvniPosuvnik.style.width = `${value}%`
    const prvniValue =  document.querySelector(`${id} .skill__value`)
    prvniValue.textContent = `${value} / 100`
}
updateSkill ('#skill1', urovenHtml)
updateSkill ('#skill2', urovenCss)
updateSkill ('#skill3', urovenJs)

