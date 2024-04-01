const coinsSimmple = require('../../config/coinsSimple');

const coinIds = Object.keys(coinsSimmple);

const cryptoUnits = [];
coinIds.forEach((coin) => {
  if (!cryptoUnits.includes(coinsSimmple[coin].unit)) {
    cryptoUnits.push(coinsSimmple[coin].unit);
  }
});

/**
 * @const { cryptoCompare:String[], coingecko:String[] } dictionary with Cryptocompare and Congecko IDS
 */
const coinAggregatorIDs = {
  // Just add the cryptoCompare ID in the end of this list
  cryptoCompare: [
    'BTC',
  ],
  /**
   * CoinGecko API ID
   * Found under the "Info" column, and part of the URL, eg. https://www.coingecko.com/en/coins/[API-ID]
   * Add to the end of the list
   */
  coingecko: [
    'zelcash',
  ],
  // This is an array with coingecko IDs for the cryptocompare IDs. This array will be used in markets to replace cryptocompare data.
  cg4cc: [],
  // livecoinwatch api
  livecoinwatch: [],
};

/**
 * Function that combines with commas the elements of a string array till some max length and then return the new array of strings
 * @param {string[]} elements
 * @param {number} maxLength
 * @returns ApiCallStrings[]
 */
function makeRequestStrings(elements, maxLength) {
  const result = [];
  let temp = '';
  elements.forEach((element) => {
    if ((`${temp + element},`).length >= maxLength) {
      result.push(temp.replace(/,\s*$/, '')); // remove last ,
      temp = `${element},`;
    } else if (element === elements[elements.length - 1]) {
      result.push(temp + element);
    } else {
      temp = `${temp + element},`;
    }
  });
  return result;
}

const cryptoCompareIDs = makeRequestStrings(coinAggregatorIDs.cryptoCompare, 300);
const coingeckoIDs = makeRequestStrings(coinAggregatorIDs.coingecko, 450);
const cg4ccIDs = makeRequestStrings(coinAggregatorIDs.cg4cc, 450);
const liveCoinWatchIDs = makeRequestStrings(coinAggregatorIDs.livecoinwatch, 400);
console.log(cryptoCompareIDs);
// console.log(coingeckoIDs);
module.exports = {
  cryptoCompareIDs,
  coingeckoIDs,
  cg4ccIDs,
  liveCoinWatchIDs,
};
