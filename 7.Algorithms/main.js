// Inseram un cod binar si facem un algoritm care sa il transformam in string

// Constrangeri --> Inputul sa fie cod binar (type number), output-ul sa fie string

//Input
//'01001000 01100101 01101100 01101100 01101111'; --> cod binar de test = "Hello"

//Output
//String --> "Hello"

//Avem nevoie de o functie care sa primeasca pe parametru un input de date de tip number si sa il transforme in string.

//Facem un split cu un string gol la ce vine pe parametru si eliminam spatiile
//Dupa ce am eliminat spatiile ramanem cu un string format din cifre.
//Iteram prin string. La fiecare iteratie

function binaryToString(inputData) {
    const biString = inputData.split(' ');
    const result = [];

    for (let i = 0; i < biString.length; i++) {
        result.push(String.fromCharCode(parseInt(biString[i], 2)));
    }

    let finalResult = result.join('');

    console.log(finalResult);
}

binaryToString('01001000 01100101 01101100 01101100 01101111');

binaryToString(
    '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);



// Algoritm care transforma din cifre arabe in cifre romane

const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValue = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

//INPUT
//   console.log(romanConventerBasic(2345));
//OUTPUT
// MMCCCXLV

//pseudocode
//Iteram prin cele doua arrayuri si stabilim relatia de egalitate decimalvalue[i] = romanValue[i]
//2345 = 2000 + 300 + 40 + 5
//       2*1000symbol + 3 * 100 symbol + 
//       MM CCC 

function fromArabToRomanNumbers(arabicInput) {
    let result = "";
    for (i=0; i<decimalValue.length; i++) {
        while (decimalValue[i] <= arabicInput) { 
            result += romanValue[i];
            arabicInput -= decimalValue[i];
            // decimalValue[i] = romanValue[i];
            // console.log(result);
        }
    }
    return result;
}
//atata timp cat 1000 <= 2345 
console.log(fromArabToRomanNumbers(2345));
// fromArabToRomanNumbers(2345);


//MMCCCXLV 
function fromRomanToArabNumbers(romanInput) {
    let result = 0;
    for(let i=0; i< romanValue.length; i++){
        while(romanInput.search(romanValue[i]) === 0 ){
            result += decimalValue[i];
            romanInput = romanInput.replace(romanValue[i], "");
            console.log(result, romanInput);
        }
    }
    return result;
}


// Aceeasi functie folosind metoda .slice()
// function fromRomanToArabNumbersAdina(romanInput) {
//     let result = 0;
//     for (let i=0; i < romanValue.length; i++) {
//         while (romanInput.search(romanValue[i]) === 0 ) {
//         result += decimalValue[i];
//                romanInput = romanInput.slice(romanValue[i].length);
//         console.log(romanInput);
//     }
//     }
//     return result;
// }


// function fromRomanToArabNumbers(romanInput) {
//     let result = 0;
//     for (i=0; i < romanValue.length; i++) {
//         while ( )
//         romanInput.search(romanValue[i])  //va cauta prin arrayul romanValue litera de la poz. i, adica M la prima iteratie, si va returna 0, adica pozitia primei litere M din romanInput.
//         result += decimalValue[i];
//         romanInput = 
//         console.log(result);
//     }
//     return result;
// }

console.log(fromRomanToArabNumbers("MMCCCXLV"));