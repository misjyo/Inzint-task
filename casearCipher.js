// Implement a Caesar cipher encoding. The key is an integer from 1 to 25. This cipher rotates the letters of the alphabet (A to Z). 
// The encoding replaces each letter with the 1st to 25th next letter in the alphabet (wrapping Z to A).

// Example input: 2, "HI", Expected output: "JK"
// Example input: 20, "HI", Expected output: "BC"
function encrypt(text, s)
{
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}
console.log(encrypt("HI", 2));  //JK
console.log(encrypt("HI", 20));  //BC
