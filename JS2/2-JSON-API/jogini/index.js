import {Header} from "./Header/index.js"
import {Intro} from "./Intro/index.js"
import {Pose} from "./Pose/index.js"

const  obsah= document.querySelector("#app")

const headerData = {
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
  }

const introData = {
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
        něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
        Postupně se seznámíte se základními principy jógy, jak přístupovat k
        sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
        svoje tělo, pocity a emoce.`,
    }

const poseData = {
    src: 'img/yoga-pose.jpg',
  }
  
obsah.innerHTML = Header(headerData)
obsah.innerHTML += Intro(introData)
obsah.innerHTML += Pose(poseData)
