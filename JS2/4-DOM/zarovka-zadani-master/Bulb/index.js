export const Bulb = () => {
    const element = document.createElement("div")
    element.classList.add("bulb")
    element.addEventListener("click", (e) => {
        e.target.classList.toggle("bulb--on")
    })
       
    return element
    
}