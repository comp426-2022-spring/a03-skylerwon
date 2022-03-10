/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  var coin = Math.floor(Math.random() * 2)
  if (coin == 0) {
    return "heads"
  }
  if (coin == 1) {
    return "tails"
  }
  return "oops";
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  if (flips == null) {
    return coinFlip();
  }
  var arr = [];
  for (let i = 0; i < flips; i++) {
    arr[i] = coinFlip()
  }
  return arr;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
var heads = 0;
var tails = 0;
if(array.length == 1) {
  if(array[0] == "heads") {
    return "{ heads: " + 1 + " }";
  }
  if(array[0] == "tails") {
    return "{ tails: " + 1 + " }";
  }
}
for (let i = 0; i < array.length; i++) {
    if(array[i] == "heads") {
      heads+=1;
    } else {
      tails+=1;
    }
  }
return "{ tails: " + tails + ", heads: " + heads + " }";
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  var result = "";
  var flip = "";
  flip = coinFlip();
  if (call == flip) {
    result = "win";
  } else {
    result = "lose"
  }
  return "{ call: '" + call + "', flip: '" + flip + "', result: '" + result + "' }"
}


/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip, coinFlips, countFlips, flipACoin};