// Write your solution in this file!
var customerName = "bob";
/*var bestCustomer = "not bob";*/

function upperCaseCustomerName () {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer () {
    bestCustomer = "maybe bob";
    return bestCustomer;
}

const leastFavoriteCustomer = "greg";

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "sam";
}