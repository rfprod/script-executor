'use strict';

module.exports.exec = () => {
  /*
  * 1 trip ticket cost is 15 cr;
  * 10 trips ticket cost is 125 cr;
  * 60 trips ticket cost is 440 cr;
  * a passenger is going to take n trips;
  *
  * what's the quantity of each ticket types a passenger should buy
  * so that the number of available trips is equal or more than n
  * and the amount of money spent is the lowest possible
  *
  * input: n - desired quantity of trips
  * output: 3 numbers representing quantity of different ticket types:
  * 1 - 1 trip tickets
  * 2 - 10 trips tickets
  * 3 - 60 trips tickets
  */
  const cost = {
    '1': 15,
    '10': 125,
    '60': 440
  };
  const costKeys = Object.keys(cost);
  let res = {
    '1': 0,
    '10': 0,
    '60': 0
  };
  const testRes = {
    '1': 0,
    '10': 1,
    '60': 2
  };
  const testN = 129;
  
  function testAnswer () {
    let counter = 0;
    for (let key in costKeys) {
      if (res[key] === testRes[key]) counter++;
    }
    if (counter === 3) console.log('solution status: correct');
    else console.log('solution status: incorrect');
  }
  
  function calc (n) {
    console.log('input n:',n);
    let rest = (n % costKeys[2]);
    res['60'] = (n - rest) / costKeys[2];
    if (rest < 9) {
      res['10'] = 0;
      res['1'] = rest;
    }else if (rest === 9) {
      res['10'] = 1;
      res['1'] = 0;
    }else{
      rest = (rest % costKeys[1]);
      res['10'] = (n - rest) / costKeys[1];
      res['1'] = rest;
    }
    console.log('calsulated result:',res);
    testAnswer();
  }
  
  calc(testN);
}