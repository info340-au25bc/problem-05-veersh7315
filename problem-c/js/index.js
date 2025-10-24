'use strict';

/* Below is an array of objects representing Husky Football games from the 2016
   season. Each object has the same properties, so it represents a data table. */
let huskyGames2016 = [
  { "date":"9/3/16", "home":"UW", "opponent":"Rutgers", "home_score":48, 
    "opponent_score":13, "passing_yards":289, "rushing_yards":91, "fumbles":0 },
  { "date":"9/10/16", "home":"UW", "opponent":"Idaho", "home_score":59, 
    "opponent_score":14, "passing_yards":356, "rushing_yards":126, "fumbles":1 },
  { "date":"9/17/16", "home":"UW", "opponent":"Portland State", "home_score":41, 
    "opponent_score":3, "passing_yards":194, "rushing_yards":213, "fumbles":1 },
  { "date":"9/24/16", "home":"Arizona", "opponent":"UW", "home_score":28, 
    "opponent_score":35, "passing_yards":160, "rushing_yards":352, "fumbles":0 },
  { "date":"9/30/16", "home":"UW", "opponent":"Stanford", "home_score":44, 
    "opponent_score":6, "passing_yards":210, "rushing_yards":214, "fumbles":0 },
  { "date":"10/8/16", "home":"Oregon", "opponent":"UW", "home_score":21, 
    "opponent_score":70, "passing_yards":304, "rushing_yards":378, "fumbles":0 },
  { "date":"10/22/16", "home":"UW", "opponent":"Oregon State", "home_score":41, 
    "opponent_score":17, "passing_yards":300, "rushing_yards":219, "fumbles":2 },
  { "date":"10/29/16", "home":"Utah", "opponent":"UW", "home_score":24, 
    "opponent_score":31, "passing_yards":186, "rushing_yards":199, "fumbles":1 },
  { "date":"11/5/16", "home":"Cal", "opponent":"UW", "home_score":27, "opponent_score":66, 
    "passing_yards":417, "rushing_yards":287, "fumbles":2 },
  { "date":"11/12/16", "home":"UW", "opponent":"USC", "home_score":13, "opponent_score":26, 
    "passing_yards":259, "rushing_yards":17, "fumbles":0 },
  { "date":"11/19/16", "home":"UW", "opponent":"Arizona State", "home_score":44, 
    "opponent_score":18, "passing_yards":338, "rushing_yards":201, "fumbles":0 },
  { "date":"11/25/16", "home":"Washington State", "opponent":"UW", "home_score":17, 
    "opponent_score":45, "passing_yards":342, "rushing_yards":168, "fumbles":1 },
  { "date":"12/2/16", "home":"Colorado", "opponent":"UW", "home_score":10, 
    "opponent_score":41, "passing_yards":118, "rushing_yards":25, "fumbles":0 },
  { "date":"12/31/16", "home":"UW", "opponent":"Alabama", "home_score":7, 
    "opponent_score":24, "passing_yards":150, "rushing_yards":44, "fumbles":1 }
 ];



function extractOpponent(game) {
  return game.home === "UW" ? game.opponent : game.home;
}


let opponents = [];
for (let game of huskyGames2016) {
  opponents.push(extractOpponent(game));
}
console.log(opponents);


function huskiesLost(game) {
  return game.home === "UW" ? game.home_score < game.opponent_score : game.opponent_score < game.home_score;
}


let lostGames = [];
for (let game of huskyGames2016) {
  if (huskiesLost(game)) {
    lostGames.push(game);
  }
}
console.log(lostGames);


let lostOpponents = [];
for (let game of lostGames) {
  lostOpponents.push(extractOpponent(game));
}
console.log(lostOpponents);


for (let game of lostGames) {
  console.log(`${extractOpponent(game)} at ${game.home === "UW" ? "UW" : game.opponent}, ${game.opponent_score} to ${game.home_score}`);
}


let fumbledGames = [];
for (let game of huskyGames2016) {
  if (game.fumbles > 0) {
    fumbledGames.push(game);
  }
}
console.log(fumbledGames.length);


let mostPassingGame = huskyGames2016[0];
for (let game of huskyGames2016) {
  if (game.passing_yards > mostPassingGame.passing_yards) {
    mostPassingGame = game;
  }
}
console.log(mostPassingGame);


let fumbledAndLostGames = [];
for (let game of huskyGames2016) {
  if (huskiesLost(game) && game.fumbles > 0) {
    fumbledAndLostGames.push(game);
  }
}
console.log(fumbledAndLostGames);


let totalScoreDifference = 0;
for (let game of huskyGames2016) {
  let difference = game.home === "UW" ? game.home_score - game.opponent_score : game.opponent_score - game.home_score;
  totalScoreDifference += difference;
}
let avgScoreDifference = totalScoreDifference / huskyGames2016.length;
console.log(avgScoreDifference);
