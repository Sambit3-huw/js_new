const accountId = 144453
let accountEmail="sambit@gmail.com"
var accountPassword="123"
let accountState;
accountCity="Jaipur"


// accountId=2 not allowed

accountEmail = "Sambit12@gmail.com"
accountPassword="456"
accountCity="BBSR"
/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);