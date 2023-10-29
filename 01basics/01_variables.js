const accountId = 14455;
let accountEmail = "rohit@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

//accountId = 2;
console.log(accountId);

accountEmail="rishi@gmail.com";
accountPassword="212121";
accountCity="Bengaluru";

/* Prefer not to use var because of issue in block
    and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);