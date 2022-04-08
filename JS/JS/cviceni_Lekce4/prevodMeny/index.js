/* Přeod měny

Napiště funkci convertToCZK, která převede částku zadanou v cizí měně na české koruny. Funkce bude podporovat
následující měny a kurzy.

Měna            Kód         Kurz
Euro            EUR         24,42
Britská libra   GBP         28,98
Americký dolar  USD         22,07
Bitcoin         BTC         1010077

Výslednou částku zaokrouhlete na celé koruny. Příklad použití:
convertToCZK(25, 'EUR')
675

POkud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci v konzoli
*/

const convertToCZK = (hodnota, mena) => {
    if (mena === "EUR"){
       return  Math.round(hodnota * 24.42)
    } else if ( mena === "GBP") {
        return Math.round(hodnota * 28.98)
    } else if (mena === "USD"){
        return Math.round(hodnota * 22.07)
    } else if (mena === "BTC"){
        return Math.round(hodnota * 1010077)
    } else{
        return "pro tuto měnu neznáme kurz"
    }
}
