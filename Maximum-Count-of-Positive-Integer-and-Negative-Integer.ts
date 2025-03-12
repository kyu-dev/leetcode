function maximumCount(nums: number[]): number {
    let maxPositiv = 0, maxNegativ = 0; 

    for (let num of nums) {  
        if (num < 0) {
            maxNegativ += 1;
        } 
        if (num > 0) {
            maxPositiv += 1;
        }
    }

    return Math.max(maxPositiv, maxNegativ); 
}