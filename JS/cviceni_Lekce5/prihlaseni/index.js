const user = {
    email: 'bar@gmail.com',
    password: '123',
    name: 'Bartoloměj',
  };

  const button = document.querySelector("button")
  const email = document.querySelector("#email")
  const heslo = document.querySelector("#heslo")
  const body = document.querySelector("body")

  button.addEventListener("click", (e) => {
    e.preventDefault()
    if (email.value === user.email && heslo.value === user.password){
        body.textContent = `Přihlášený uživatel ${user.name}`
    } else {
        
        document.body.innerHTML += `<h1> Neplatné přihlašovací údaje </h1>`
    }
  })

  //upravit kolonku s emailem. vymaze se mi