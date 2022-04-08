const zarovka = document.querySelector(".bulb")


const rozni = () => {
    zarovka.classList.toggle("bulb--on")
  };
  
document.addEventListener('keydown', rozni);