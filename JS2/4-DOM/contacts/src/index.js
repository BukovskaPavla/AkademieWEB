import './style.css';

console.log('funguju!');


const contact1 = document.createElement("div")
contact1.classList.add("contact")

contact1.innerHTML= `<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>`

document.querySelector("#app").appendChild(contact1)



const contact2 = document.createElement("div")
contact2.classList.add("contact")

contact2.innerHTML= `<span class="name">Petr Novák</span>
<span class="phone">+420 777 888 555</span>
<span class="email">rad.zva@gmail.com</span>`

document.querySelector("#app").appendChild(contact2)



const contact3 = document.createElement("div")
contact3.classList.add("contact")

contact3.innerHTML= `<span class="name">Jana Holá</span>
<span class="phone">+420 606 444 545</span>
<span class="email">dasdq@gmail.com</span>`

document.querySelector("#app").appendChild(contact3)