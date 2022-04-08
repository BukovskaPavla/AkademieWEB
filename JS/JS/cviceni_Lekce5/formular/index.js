const prvniFormular = document.querySelector("#prvniFormular")
const firstName = document.querySelector("#firstName")

prvniFormular.addEventListener("submit", (udalost) => {
    udalost.preventDefault() //at te neneapadne stranku znova nacist
    alert(firstName.value)
})