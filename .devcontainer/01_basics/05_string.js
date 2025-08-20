const name = "Sambit";
const repoCount = 50;

console.log('Hello my name is ${name} and I have ${repoCount} repositories.');

const gameName = new String("sambit ff")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));

const newString = gameName.substring(0, 5); //create  new string like the org string by removing some characters
console.log(newString);

const anotherString = gameName.slice(-8 , 4) //recreate the string  by the given values
console.log(anotherString)

const newStringOne = " SKP ";
console.log(newStringOne.trim()); //Extra spaces removal


const url = "https://sambit.com/sambit%20paikaray"
console.log(url.replace("%20","com")) // instead of 20 ,com is used

console.log(url.includes("sun")) //  Gives true or false if the word is present or not


console.log(gameName.split('-'))