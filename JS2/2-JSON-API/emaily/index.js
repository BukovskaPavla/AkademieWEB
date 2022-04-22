/* import { Email } from "./Email/index.js"; */
import { EmailsFolder } from "./EmailsFolder/index.js";
//import { EmailsFolder } from "./EmailsFolder/index.js"

let url = "https://apps.kodim.cz/daweb/trening-api/apis/emails"


fetch(url)
  .then((response) => response.json())
  .then(
    (data) =>
      (document.querySelector("#app").innerHTML += EmailsFolder({
        folderTitle: "Nepřečtené",
        emails: data.emails
      }))
  );
/* 
fetch(`${url}?folder=read`)
.then((response) => {
    return response.json()
    })
.then((data) => {
    const precteneZpravy = document.querySelector("#inbox")
    precteneZpravy.innerHTML += `<h2>Přečtené</h2>`
    for (let index = 0; index < data.emails.length; index++) {
    precteneZpravy.innerHTML += Email(data.emails[index])
    }})
    
fetch(`${url}?folder=unread`)
    .then((response) => {
        return response.json()
        })
    .then((data) => {
        const neprecteneZpravy = document.querySelector("#inbox")
        neprecteneZpravy.innerHTML += `<h2>Nepřečtené</h2>`
        for (let index = 0; index < data.emails.length; index++) {
        neprecteneZpravy.innerHTML += Email(data.emails[index])
        }}) */



/* const emails = [
    {
      sender: {
        name: 'Richard Kukátko',
      },
      subject: 'Převoz ledničky',
      time: '17:35',
    },
    {
      sender: {
        name: 'Mnislava Slaměná',
      },
      subject: 'Objednávka dortu',
      time: '6:31',
    },
    {
        sender: {
          name: 'Jana Chaloupková',
        },
        subject: 'Uspávání',
        time: '20:00',
      },
    {
        sender: {
            name: 'Josef Bukovský',
        },
        subject: 'Nová píseň',
        time: '20:30',
    },
  ] */


/* const    (data) => {
        const neprecteneZpravy = document.querySelector("#inbox")
        console.log("fetch jede sem")
        console.log(data)
        for (let index = 0; index < data.length; index++) {
            console.log("bezi mi i for")
            neprecteneZpravy.innerHTML += Email(data[index])
            }
    } */

    /* for (let index = 0; index < emails.length; index++) {
        neprecteneZpravy.innerHTML += Email(emails[index])
        
    }
 */
