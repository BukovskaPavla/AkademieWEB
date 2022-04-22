/* const tlacitko = document.querySelector("#tlacitko")
 
const generuj = (data) => {
    return `
    <p>Tvoje heslo je ${data} `
}

tlacitko.addEventListener("click",() => fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords')
    .then((response) => {

    return response.json()
})
    .then((data) => {
        console.log(data)
        heslo.textContent = data.password
    })
) */




const handleClick = () => {
    const delkaHesla = document.querySelector("#delkaHesla").value

    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${delkaHesla}`)
    .then((response) => response.json())
    .then((data) => document.querySelector("#vysledek").textContent = data.password)
    document.querySelector("#vysledek").textContent = "čekám na heslo"
    
}

document.querySelector("#tlacitko").addEventListener("click",handleClick)

