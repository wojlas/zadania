// Napisz funkcję countWord(txt), która wymagać będzie tekstu. Funkcja powinna zwrócić liczbę słów z ilu składa się przekazany tekst.
//     Następnie użyj jej do wypisania tekstu: "Tekst 'tutaj twój przykładowy tekst' składa się z 4 wyrazów"
// Przykładowy tekst pobierz od użytkownika za pomocą funkcji prompt(). Jeżeli użytkownik nic nie wpisze, wypisz w konsoli tekst nie mam co liczyć.

// function countWord(txt) {
//     const arr = txt.split(" ");
//     if (arr.length != 1 & arr[0].length > 0) {
//         return `Tekst ${txt} ma ${arr.length} słów/słowa`;
//     } else {
//         return "Nie mam co liczyć";
//     }
//
// }
//
// const text = prompt("Podaj tekst: ");
// console.log(countWord(text));

// Za pomocą funkcji prompt() pobierz od użytkownika jego imię.
//     Napisz funkcję fixName(name), do której przekażesz przekazane imię.
//     Funkcja powinna zwrócić poprawione imię, które będzie pisane małymi literami i rozpoczynało się od dużej litery.
//     Wykorzystaj tą funkcję do wypisania w konsoli tekstu "Imię Piotr rozpoczyna się od litery P".
//     Jeżeli użytkownik nic nie wpisze, w konsoli wpisz tylko tekst "nic nie wpisano".

// function fixName(name) {
//     const formatedName = [];
//     if (name.length > 0) {
//         for (let el of name) {
//             if (el === name[0]) {
//                 formatedName.push(el.toUpperCase());
//             } else {
//                 formatedName.push(el.toLowerCase());
//             }
//         }
//         return `Imię ${formatedName.join("")} rozpoczyna się od litery ${formatedName[0]}`;
//     }
// }
//
// const name = prompt("Podaj imie: ");
// console.log(fixName(name));

// Napisz funkcję fileInfo(file), która będzie przyjmować pełną nazwę pliku (wraz z rozszerzeniem).
// Funkcja powinna zwracać obiekt, z właściwościami name oraz extension. Pod name podstaw nazwę przekazanego pliku, a pod extension jego rozszerzenie.
//     Jeżeli przekazany plik nie będzie w formacie nazwa.rozszerzenie (np. nie będzie miał nazwy plik.jpg), wtedy funkcja powinna zwróć false.

