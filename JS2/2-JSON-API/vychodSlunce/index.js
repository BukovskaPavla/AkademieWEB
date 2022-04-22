const vypis = (data) => {
    console.log(data)
    /* vychod.textContent += data.results.sunset
    zapad.textContent += data.results.sunrise */
}

const vychod = document.querySelector("#sunset")
const zapad = document.querySelector("#zapad")
const tlacitko = document.querySelector("button").addEventListener("click", vypis)




fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
.then((response) => {
    return response.json()
    }).then((data) => {
        return data
    })
