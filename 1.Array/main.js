const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`); //afiseaza nr 113 ca fiind codul ASCII pentru caracterul "q".

function getCharCodes(s) {
    let charCodeArr = [];
    for (let i=0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        charCodeArr.push(code);
    }
    let charCodeString = charCodeArr.toString();
    console.log(charCodeString);
    let charCodeJoined = charCodeString.split(',').join(' ');
    console.log(charCodeJoined);
}

getCharCodes("This is a test!");

