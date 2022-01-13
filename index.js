// Write your solution in this file!
var customerName='bob';
const leastFavoriteCustomer='bill';

function upperCaseCustomerName(){
   customerName=customerName.toUpperCase();

}

function setBestCustomer(){
    bestCustomer='not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer='maybe bob';
    return bestCustomer;

}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='bobby';
    return leastFavoriteCustomer;
}