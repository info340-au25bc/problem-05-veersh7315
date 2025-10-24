'use strict';


function addFour(num) {
    return num + 4; 
}



let twelve = addFour(8);
console.log(twelve);



let twelveString = addFour("8");
console.log(twelveString);


function compoundInterest(principle, rate, years) {
    return principle * Math.exp(rate * years);
}


function fizzBuzz(num) {
    let result = [];
    if(num < 1) return result;
    
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if(i % 3 === 0) {
            result.push("Fizz");
        } else if(i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}



function getLetterFrequencies(str) {
    let frequencies = {};
    for(let char of str) {
        if(frequencies[char]) {
            frequencies[char]++;
        } else {
            frequencies[char] = 1;
        }
    }
    return frequencies;
}


let deck = [];
const suits = ["hearts", "diamonds", "clubs", "spades"];
for(let suit of suits) {
    for(let rank = 2; rank <= 14; rank++) {
        deck.push({suit: suit, rank: rank});
    }
}


function containsQueenOfHearts(cards) {
    return cards.some(card => card.suit === "hearts" && card.rank === 12);
}


function getHighCard(cards) {
    return cards.reduce((highest, current) => 
        current.rank > highest.rank ? current : highest
    );
}


function isFlush(cards) {
    return cards.every(card => card.suit === cards[0].suit);
}

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
    /* eslint-disable */
    if(typeof addFour !== 'undefined') 
      module.exports.addFour = addFour;
    if(typeof twelveString !== 'undefined') 
      module.exports.twelveString = twelveString;
    if(typeof compoundInterest !== 'undefined') 
      module.exports.compoundInterest = compoundInterest;
    if(typeof fizzBuzz !== 'undefined') 
      module.exports.fizzBuzz = fizzBuzz;
    if(typeof getLetterFrequencies !== 'undefined')
      module.exports.getLetterFrequencies = getLetterFrequencies;
    if(typeof deck !== 'undefined')
      module.exports.deck = deck;
    if(typeof containsQueenOfHearts !== 'undefined')
      module.exports.containsQueenOfHearts = containsQueenOfHearts;
    if(typeof getHighCard !== 'undefined')
      module.exports.getHighCard = getHighCard;
    if(typeof isFlush !== 'undefined')
      module.exports.isFlush = isFlush;
  }