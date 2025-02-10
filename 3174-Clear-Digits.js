/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []

    for (const char of s) {
        if (!isNaN(+char)) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join('')
};