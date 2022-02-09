//letters: 52
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E",
"F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//numbers: 10
const numbers = [0,1,2,3,4,5,6,7,8,9]

//symbols: 29
const symbols = ["!","@","#","$","%","^","&","*","(",")","-","+","_","=","[","]","{","}","|",":",";","<",">","?","/","~","`",",","."]


const ranLettersIndex = Math.floor(Math.random() * letters.length + 1)
const ranNumIndex = Math.floor(Math.random() * numbers.length + 1)
const ranSymIndex = Math.floor(Math.random() * symbols.length + 1)


function generatePassword() {
    //generate 10 letters into 4 password variables
    let password1 = ""
    let password2 = ""
    let password3 = ""
    let password4 = ""
    // for loop 10 times to push letters / numbers / symbols
    for (let i = 0; i < 10; i++) {
        password1 += letters[ranLettersIndex]
    }
    for (let i = 0; i < 10; i++) {
        password1 += numbers[ranNumIndex]
    }
    for (let i = 0; i < 10; i++) {
        password1 += symbols[ranSymIndex]
    }

    return password1

}

console.log(generatePassword())




