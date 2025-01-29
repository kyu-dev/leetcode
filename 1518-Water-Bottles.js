/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */ 
function numWaterBottles(numBottles, numExchange) {
  let total = numBottles;

  while (numBottles >= numExchange) {
    let newBottles = Math.floor(numBottles / numExchange); // Bouteilles obtenues après l'échange
    let emptyBottles = numBottles % numExchange; // Bouteilles restantes après échange

    total += newBottles; // On boit les nouvelles bouteilles
    numBottles = newBottles + emptyBottles; // Mise à jour du nombre total de bouteilles
  }

  return total;
}

console.log(numWaterBottles(9, 3));