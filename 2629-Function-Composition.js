/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let r = x;
        for(let i = functions.length - 1; i >= 0; i--){
            r = functions[i](r)
        }
        return r;

    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */