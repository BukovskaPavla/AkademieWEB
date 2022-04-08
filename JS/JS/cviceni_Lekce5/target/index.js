console.log("jeduu")
/* 
="smiley1"
="smiley2"
="smiley3"
="smiley4"
="smiley5"
*/
const zprava = document.querySelector("#zprava")
const vypisSmajlika = (event) => {
    console.log()
    zprava.textContent += event.target.textContent
}

document.querySelector("#smiley1").addEventListener('click',vypisSmajlika)
document.querySelector("#smiley2").addEventListener('click',vypisSmajlika)
document.querySelector("#smiley3").addEventListener('click',vypisSmajlika)
document.querySelector("#smiley4").addEventListener('click',vypisSmajlika)
document.querySelector("#smiley5").addEventListener('click',vypisSmajlika)
document.querySelector("#smiley6").addEventListener('click',vypisSmajlika)



/* const vypisPrvnihoSmajlika = () => {
    zprava.textContent += '😀'
} */

/* smiley1.
smiley2.addEventListener('click',vypisSmajlika)
smiley3.addEventListener('click',vypisSmajlika)
smiley4.addEventListener('click',vypisSmajlika)
smiley5.addEventListener('click',vypisSmajlika)
smiley6.addEventListener('click',vypisSmajlika) */