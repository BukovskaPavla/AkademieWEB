//formát JSON (JavaScript Object Notation)
// vše kromě čísel je v uvozovkách
const course = {
    "nazev": "Úvod do programování",
    "lektor": "Martin Podloucký",
    "konani": [
      {
        "misto": "T-Mobile",
        "koucove": ["Dan Vrátil", "Filip Kopecký", "Martina Nemčoková"],
        "ucastnic": 30,
      },
      {
        "misto": "MSD IT",
        "koucove": ["Dan Vrátil", "Zuzana Tučková", "Martina Nemčoková"],
        "ucastnic": 25,
      },
      {
        "misto": "Škoda DigiLab",
        "koucove": ["Dan Vrátil", "Filip Kopecký", "Kateřina Kalášková"],
        "ucastnic": 41,
      },
    ],
  };

// VOlání API (aplikation programing interface)
// protokol://adresa_serveru/cesta?parametr1=hodnota1&parametr2=hodnota2
// https://www.google.com/search?q=praha&sourceid=chrome
// protokol - standard 

/* const promise = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
//promise slib, jakmile se data stahnou, tak s nima muzu pracovat
promise.then((response)=>{
    //z response chci ziskat dala z JSON
    return response.json() */

////jak dojde ke stažení, tak chci udělat něco- funkci

const displaySunset = (data) => {
    console.log(data.results.sunset)
    const sunsetELM = document.querySelector("#sunset")
    sunsetELM.textContent = data.results.sunset
    }

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => {
    //z response chci ziskat dala z JSON
    //console.log(response)
    return response.json()
    }).then(displaySunset)

