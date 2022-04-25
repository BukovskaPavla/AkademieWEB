/* muj puvodni kod

const user = {
    email: 'bar@gmail.com',
    password: '123',
    name: 'Bartoloměj',
  };

  const button = document.querySelector("button")
  const email = document.querySelector("#email-input")
  const heslo = document.querySelector("#password-input")
  const body = document.querySelector("body")

  button.addEventListener("click", (e) => {
    e.preventDefault()
    if (email.value === user.email && heslo.value === user.password){
        body.textContent = `Přihlášený uživatel ${user.name}`
    } else {
        
        document.body.innerHTML += `<h1> Neplatné přihlašovací údaje </h1>`
    }
  })

  //upravit kolonku s emailem. vymaze se mi */

  const user = {
    email: "bartolomej.rozumbrada@gmail.com",
    password: "vimzenicnevim",
    name: "Bartoloměj"
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailInput = document.querySelector("#email-input");
    const passwordInput = document.querySelector("#password-input");
    const container = document.querySelector(".container");
  
    if (emailInput.value === user.email && passwordInput.value === user.password) {
      container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`;
    } else {
      container.innerHTML = "<h1>Neplatné přihlašovací údaje</h1>";
    }
  };
  
  document.querySelector("#login-form").addEventListener("submit", handleSubmit);
  