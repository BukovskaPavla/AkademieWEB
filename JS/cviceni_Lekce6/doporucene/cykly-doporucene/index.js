/* Počítání hodin
zapni hlavu
Napište cyklus WHILE, který do konzole postupně vypíše všechny časové 
údaje v rámci jednoho dne od 0:00 až po 23:59.

Ukázka výstupu:

0:00
0:01
0:02
…
23:58
23:59
*/







/* Čekání na šestku
to dáš
Založte JavaScriptový program a splňte následující úkoly.

Napište funkci roll, která simuluje hod kostkou. Vrátí tedy 
náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou 
pravděpodobnost.
Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. 
Vypište na výstup na kolikátý pokus šestka padla.
Spusťte váš program desetkrát za sebou a zaznamenejte výsledky.
 Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.*/
console.log(Math.round(Math.random()*5+1))
 const roll = () => {
     for (i = 0, i < 6, i++){
         
     }
     return Math.random()*6+1
 }
