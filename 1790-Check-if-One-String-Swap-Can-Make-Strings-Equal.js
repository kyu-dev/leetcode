/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let first = -1;
    for (let i=0; i<s1.length; i++) {
        if (s1[i] != s2[i]) {
            if (first == -1) {
                first = i;
            } else {
                return `${s1.slice(0,first)}${s1[i]}${s1.slice(first+1, i)}${s1[first]}${s1.slice(i+1, s1.length)}` == s2;
            }
        }
    }
    return first == -1;
};