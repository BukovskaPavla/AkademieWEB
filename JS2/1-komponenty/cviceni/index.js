/* cvičení z JS2*/

/* 
Produkt
to dáš
Představte si, že tvoříte e-shop, ve kterém mají produkty 
následující strukturu.

const product1 = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč',
};
Postupujte dle kroků níže a vytvořte kód pro zobrazení 
produktu na stránce.

Vytvořte HTML stránku s následující strukturu body:
<body>
  <section id="products-section"></section>
</body>
Vložte do stránky soubor index.js a na jeho začátku si 
vytvořte objekt product1. Vymyslete si nějaký produkt 
s vlastnostmi name, price a currency.
Ve vašem programu do proměnné productHtml sestavte HTML 
pro váš produkt s použitím vašeho objektu product1. 
Struktura může vypadat například takto.
<div class="product">
  <h2 class="product__name">Mlýnek na kávu</h2>
  <p class="product__price">Cena: 520 Kč</p>
</div>
Vyberte ze stránky element .products-section a vložte do něj vámi vytvořené HTML.
*/
const NakupniSeznam = (props) => {
    const { name, price, currency } = props
    
    return ` <h2 class="product__name">${name}</h2>
        <p class="product__price">Cena: ${price} ${currency}</p>`
}

const product = [
{
    name: 'Mlýnek na kávu',
    price: 520,
    currency: 'Kč',
},
{
    name: 'Rohlíky',
    price: 2,
    currency: 'Kč',
},
{
    name: 'Rajčate',
    price: 70,
    currency: 'Kč',
},
{
    name: 'Máslo',
    price: 55,
    currency: 'Kč',
},
];


const listElm = document.querySelector('.products-section');
for (let i = 0; i < product.length; i += 1) {
  listElm.innerHTML += NakupniSeznam(product[i]);
}


/* 
Vytvořte funkci Product, s jedním parametrem props. Tato funkce bude 
představovat komponentu pro jeden produkt.

Do funkce Product vložte kód vytvářející HTML pro jeden produkt. 
Dejte pozor, že uvnitř komponenty se produkt předává v parametru 
props. Nechť vaše funkce jako svůj výsledek vrátí vyrobené HTML.

Použijte vaši komponentu k zobrazení jednoho produktu na stránce.
Vytvořte si pole products s alespoň třemi různými produkty. Pomocí 
cyklu toto pole projděte a pomocí vaší komponenty zobrazte na stránce 
každý jednotlivý produkt.
*/