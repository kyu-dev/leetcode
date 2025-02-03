/**
 * @param {number[]} nums
 * @return {number}
 */
const longestMonotonicSubarray = function(nums) {
   if(nums.length === 0){
    return 0;
   } 

   let inc = 1;
   let max = 1;
   let dec =1;

   for(let i = 0; i < nums.length -1 ; i++){
    if (nums[i + 1] > nums[i]){
        inc++;
        dec = 1;
    }
    else if (nums[i + 1] < nums[i]){
        dec++;
        inc = 1;
    }
    else{
        dec = 1;
        inc = 1;
    }
        max = Math.max(inc, dec, max)
   }
   return max
};