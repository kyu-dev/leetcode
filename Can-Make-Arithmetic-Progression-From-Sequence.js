/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sarr = arr.sort((a,b)=> a-b);
    const dist = sarr[1] - sarr[0];

    for (let i = 0; i < sarr.length -1 ; i++){
        if(sarr[i] + dist !== sarr[i+1]){
            return false
        }
    }
    return true;
};