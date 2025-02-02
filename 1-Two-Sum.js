/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//brute force
/*const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++ ){
       for( let j = i+1 ; j< nums.length; j++ ){
         if ( nums[i] + nums[j] === target) {
            return [i,j];
         }
       }
    }
};*/

const twoSum = function(nums,target){
    let numToIndexMap = {};
    for(let i=0; i<nums.length;i++){
        let diff = target - nums[i];
        if(numToIndexMap.hasOwnProperty(diff)){
            return [i,numToIndexMap[diff]];
        }
        numToIndexMap[nums[i]] = i;
    }
}