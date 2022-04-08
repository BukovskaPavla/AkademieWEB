console.log("auto jed")

const auto = document.querySelector("img")
let posun = 0

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowRight") {
        console.log("jo to je sipka vpravo")
        posun = posun + 20
        auto.style.marginLeft = `${posun}px`}
    else if (e.code === "ArrowLeft") {
        console.log("jo to je sipka vlevo")
        posun = posun - 20
        auto.style.marginLeft = `${posun}px`}
})