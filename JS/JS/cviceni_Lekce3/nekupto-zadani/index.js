const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1HTML = `
  <img class="card-img-top" src="${product1.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`

const product2HTML = `
  <img class="card-img-top" src="${product2.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product2.name}</h2>
    <p class="card-text">${product2.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`
const product3HTML = `
  <img class="card-img-top" src="${product3.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product3.name}</h2>
    <p class="card-text">${product3.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`


const prvniProdukt = document.querySelector('#product1')
prvniProdukt.innerHTML = product1HTML
prvniProdukt.classList.add('border-primary')

const druhyProdukt = document.querySelector('#product2')
druhyProdukt.innerHTML = product2HTML

const tretiProdukt = document.querySelector('#product3')
tretiProdukt.innerHTML = product3HTML

const tlacitko = document.querySelector('#product2 button')
tlacitko.classList.remove('btn-primary')

const posledni = document.querySelector('#product3 .card-title')
posledni.classList.toggle('text-center')


