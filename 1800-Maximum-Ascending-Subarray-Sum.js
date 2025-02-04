/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function(nums) {
    let currentSum = nums[0];
    let maxSum = currentSum;

    for (let i = 1; i < nums.length; i++){
        if (nums[i] > nums[i - 1]){
            currentSum = currentSum + nums[i]; //ajoute le nombre actuelle à l'index [i] si le precédant est < 
        }else {
            currentSum =  nums[i]; //sinon on recommence la suite d'incrementation au prochain nombre
        } 
        maxSum = Math.max(maxSum, currentSum);  
    }

     return maxSum;
};

/*
        _._     _,-'""`-._
       (,-.`._,'(       |\`-/|
            `-.-' \ )-`( , o o)
                  `-    \`_`"'-
*/