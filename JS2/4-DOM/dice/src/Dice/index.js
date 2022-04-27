/* <div class="dice">
        <div class="dice__side dice__side--1"></div>
        <button class="btn btn--small roll-btn">hodit</button>
      </div>
      <div class="dice">
        <div class="dice__side dice__side--5"></div>
        <button class="btn btn--small roll-btn">hodit</button>
      </div>
      <div class="dice">
        <div class="dice__side dice__side--3"></div>
        <button class="btn btn--small roll-btn">hodit</button>
      </div>
      <div class="dice">
        <div class="dice__side dice__side--2"></div>
        <button class="btn btn--small roll-btn">hodit</button>
      </div> */

export const Dice = (props) => {
    const {side} = props
    const dice = document.createElement("div")
    dice.classList.add("dice__side")
    dice.classList.add(`dice__side--${side}`)
    const button = document.createElement("button")
    button.classList.add("btn btn--small roll-btn")
    button.textContent = "Hodit"

    return dice, button

}