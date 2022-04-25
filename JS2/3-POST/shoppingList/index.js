console.log("funguju")



document.querySelector("#vytvorSeznam").addEventListener("click", () => {
    const jmeno = document.querySelector("#jmenoSeznamu").value
    const product = document.querySelector("#product").value
    const amount = document.querySelector("#amount").value
    
    const newItem = {
        "action": "addItem",
        "product": product,
        "amount": amount,
        "done": true
    }
    
fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${jmeno}`, 
    {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',},
    body: JSON.stringify(newItem)
    })
    .then((response)=>{
        return response.json})
    .then((data) => {
        console.log(data)
        console.log(newItem)
    })
})