const formular = document.querySelector("#registration")


formular.addEventListener("submit", (udalost) => {
    udalost.preventDefault() //at te neneapadne stranku znova nacist
    formular.textContent = `Objednávka odeslána ke zpracování.`
})