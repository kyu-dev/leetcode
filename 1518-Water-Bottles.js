/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */ 
function numWaterBottles(numBottles, numExchange) {
  let total = numBottles;

  while (numBottles >= numExchange) {
    let newBottles = Math.floor(numBottles / numExchange); // Bouteilles obtenues apr�s l'�change
    let emptyBottles = numBottles % numExchange; // Bouteilles restantes apr�s �change

    total += newBottles; // On boit les nouvelles bouteilles
    numBottles = newBottles + emptyBottles; // Mise � jour du nombre total de bouteilles
  }

  return total;
}

console.log(numWaterBottles(9, 3));