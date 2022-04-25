console.log("funguju")

document.querySelector("#vote-btn").addEventListener("click", (e) =>{
    e.preventDefault()
    const jmeno = document.querySelector(".jmeno").value

    const vote = {
        optionId: 1, voterName: jmeno
    }

    
    fetch("https://apps.kodim.cz/daweb/hlasovani/api/poll/2", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vote)
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            if (data.status === "error"){
                document.body.innerHTML += `<p>Nelze hlasovat dvakrát se stejným jménem</p>`
            }
        })
})



/* response vrací text 
GET a POST
- GET ziskavam data viz nahore
- POST posilam data na server
- komunikace probiha TEXTOVE a ja si z toho pak vytvorm html, css, ...
    json.stringify -> prevede mi objekt na retezec
        {
        name: 'Petr',
        age: 25,
        }

        > JSON.stringify({ name: 'Petr', age: 25 })
        "{"name":"Petr","age":25}"
*/