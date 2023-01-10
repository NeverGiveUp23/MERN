// Basic if statement 

let canAfford = (itemPrice, accountBalance) => {
if( itemPrice > accountBalance){
  return `Cannot afford! You are $${itemPrice - accountBalance} short`;
}
else {
  return "Can Afford!";
}
};


// Ternary If statement

let canAffordIt = (itemPrice, accountBalance) => {
return itemPrice > accountBalance ? `Cannot Afford! You are $${itemPrice - accountBalance}` : 'Can Afford!';
// is the itemPrice > accountBalance
// yes? then return "Cannot Afford"
// no? then return "Can Afford"
}