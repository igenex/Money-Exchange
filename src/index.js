// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  "use strict";
  if(currency <= 0) {return {};}
  else if(currency > 10000) {return {error : "You are rich, my friend! We don't have so much coins for exchange"};}

  let equivalent = [["H", 50], ["Q", 25], ["D", 10], ["N", 5], ["P", 1]];
  let result = Object.create(null);

  let i = 0;
  let halfresult = 0;
  while(currency !== 0) {
    let change = currency % equivalent[i][1];
    if(change) {
      halfresult = Math.floor(currency / equivalent[i][1]);
      if(halfresult === 0) {i++; continue}
      result[equivalent[i][0]] = halfresult;
      currency %= equivalent[i][1];
      i++;
      continue;
    }
    result[equivalent[i][0]] = currency / equivalent[i][1];
    break;
  }
  return result;
};

