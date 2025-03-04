function findTheDifference(s: string, t: string): string {
    let sumS = 0, sumT = 0;

    for (let char of s) sumS += char.charCodeAt(0);
    for (let char of t) sumT += char.charCodeAt(0);

    return String.fromCharCode(sumT - sumS);
}