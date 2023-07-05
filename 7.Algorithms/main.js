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
