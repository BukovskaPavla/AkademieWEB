/*Catering
zapni hlavu
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food : Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama : Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven : Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, 
pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu 
o tom že catering byl dodán a za jakou cenu. Například

catering od Flavour Haven pro 100 lidí za 300 000 Kč
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje 
vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet 
lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vypíše zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300 000 Kč*/

const justFood = (pocetLidi) => {
    return `catering od Just Food byl dodán pro ${pocetLidi} za cenu ${pocetLidi* 25}`
}

const yourMama = (pocetLidi) => {
    return `catering od Your Mama byl dodán pro ${pocetLidi} za cenu ${pocetLidi* 50}`
}

const flavourHaven = (pocetLidi) => {
    return `catering od Flavour Haven byl dodán pro ${pocetLidi} za cenu ${pocetLidi* 500}`
}

const createEvent = (udalost, pocetLidi, spolecnost) => {
return `Událost ${udalost} s cateringem od ${spolecnost} pro ${pocetLidi} lidí`
}