function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); 
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false; 
            }
        }
    }

    return stack.length === 0; 
}
