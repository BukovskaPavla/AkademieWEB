console.log('funguju!');

const hodiny = [
{
    hours: "12",
    minutes: "45",
},
{
    hours: "24",
    minutes: "05",
},
{
    hours: "06",
    minutes: "30",
},
]


const Clock = (props) => {
    const { hours, minutes } = props
    return `<div class="clock">
    <span class="clock__hours">${hours}</span>:<span class="clock__minutes">${minutes}</span>
  </div>`
}

const app = document.querySelector('#app');


  for (let i = 0; i < hodiny.length; i += 1) {
    app.innerHTML += Clock(hodiny[i]);
  }