//Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.

const formular = document.querySelector("#formular")
const email = document.querySelector("#email")

formular.addEventListener("submit", (udalost) => {
    udalost.preventDefault() //at te neneapadne stranku znova nacist
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}.
    `
})