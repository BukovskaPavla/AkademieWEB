import { Flight } from "./Fligth/index.js";

const items = [
{
    cityFrom: 'Praha',
    cityTo: 'Londýn',
    timeFrom: '3. srpna 2022, 13:30',
    timeTo: '3. srpna 2022, 14:00',
},
{
    cityFrom: 'Praha',
    cityTo: 'Londýn',
    timeFrom: '3. srpna 2022, 13:30',
    timeTo: '3. srpna 2022, 14:00',
}
];



  const listElm = document.querySelector('.container');
  for (let i = 0; i < items.length; i += 1) {
    listElm.innerHTML += Flight(items[i]);
  }