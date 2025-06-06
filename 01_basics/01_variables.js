const accountId = 144558
let accountEmail="vikas@google.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2  //not allowed

accountEmail="hc@hc.com"
accountPassword="2392"
accountCity="sikar"
console.log(accountId);

/*prefer not to use var 
bcoz of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword, accountCity])

