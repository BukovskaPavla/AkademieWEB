import './style.css';

console.log('funguju!');

const myFunction = (par1, par2) => {
    return (par1+par2)
}
const shortFunction = (n1, n2) => n1 + n2
//console.log(myFunction(1,2), shortFunction(1,2))
const name = "Pavel"
const fistLetter = name.slice(0,1) //metoda na řetězcích
//console.log(fistLetter)


//forEach
const myArray = [4,1,6,8,16,-3,9]
for (let i = 0; i < myArray.length; i++){
    //console.log(myArray[i])
}
//myArray.forEach((num) => console.log(num)) //hezci zapis

const animals = [
    {name: "želva", speed: 0.5},
    {name: "nosorožec", speed: 1},
    {name: "hroch", speed: 10},
]
//animals.forEach((animal) => console.log(`jemno: ${animal.name}`))


//some
const isBigger = myArray.some((num) => num>10)
//console.log(isBigger)

//every
//pouze pokud vsechny polozky odpovidaji, tak dostanu true
const numbersArePositive = myArray.every((num) => num>0)
//console.log(numbersArePositive)


//CVICENI 1
const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];

//persons.forEach((person) => console.log(`vek: ${person.age}`))
//names.forEach((name) => console.log(name.slice(0,1)))
//console.log(names.every((name) => name.length>4))
//const delitelnost = numbers.some((number) => number % 11 ===0 )
//console.log("delitelnost " + delitelnost)


// CVICENI NA DOMA - JEDNOHUBKY NA DOMA
//numbers.forEach((number) => console.log(Math.round(number/numbers.length)))
//names.forEach((name) => console.log(name.slice(-1)))
//console.log("jsou tu jen kluci nebo holky = " 
//    + persons.every((person) => person.gender ==="male" || person.gender ==="male"))
//console.log(`Jmena delsi nez ze 4 pismen: 
//    ${names.filter((name) => name.length > 4)}`)
//console.log(persons.filter((person) => person.age>=18 ))
//console.log(names.map((name) => `<li>${name}</li>`))


//FILTER - vraci nove pole
const filterArray = myArray.filter((item) => item % 3 === 0)
//console.log(filterArray)

//MAP - pozmeni polozky a ulozi do pole
const doubled = myArray.map((item) => item*2)
//console.log(doubled)
const animalSpeed = animals.map((item) => `${item.name} ma max rychlost ${item.speed}`)
//console.log(animalSpeed)



//CVICENI - FUNKCIONALNI JEDNOHUBKY 
const evenNumbers = numbers.filter((num) => num % 2 === 0)
//console.log(evenNumbers)
const adults = persons.filter((person) => person.age>=18)
//console.log(adults)
const dividedByThree = numbers.map((num) => Math.round(num /3) )
//console.log(dividedByThree)
const emails = persons.map((person) => `${person.name.toLowerCase()}@gmail.com`)
//console.log(emails)


//CVICENI NA DOMA - UKOLNICEK
const tasks = [
    {
      name: 'Vyprat košile',
      due: {
        time: 3,
        unit: 'day',
      },
      notify: {
        time: 1,
        unit: 'day',
      },
      done: false,
    },
    {
      name: 'Nakoupit na nedělní oběd',
      due: {
        time: 2,
        unit: 'day',
      },
      notify: {
        time: 6,
        unit: 'hour',
      },
      done: false,
    },
    {
      name: 'Zopakovat si funkce vyšších řádů',
      due: {
        time: 8,
        unit: 'hour',
      },
      notify: {
        time: 30,
        unit: 'minute',
      },
      done: true,
    },
    {
      name: 'Dát výpověď v práci',
      due: {
        time: 14,
        unit: 'day',
      },
      notify: {
        time: 4,
        unit: 'day',
      },
      done: false,
    },
    {
      name: 'Jít si zaběhat',
      due: {
        time: 2,
        unit: 'day',
      },
      notify: {
        time: 1,
        unit: 'hour',
      },
      done: true,
    },
  ];
const taskNames = tasks.filter((task) => task.name)
//console.log(taskNames)
const finishedTasks = tasks.filter((task) => task.done === true)
//console.log(finishedTasks)
const upcomingTasks = tasks.filter((task) => ((task.due.unit ==="day" && task.due.time<=3))||(task.due.unit==="hour"))
//console.log(upcomingTasks)
const areUpcomingTasksDone = upcomingTasks.every((task) => task.done ===true)
//console.log(areUpcomingTasksDone)