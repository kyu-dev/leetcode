function isPalindrome(x) {
  let xstr = x.toString();
  let reverseX = xstr.split('').reverse().join('');
  if (xstr == reverseX){
      return true
  }else {
      return false
  }
};
console.log(isPalindrome(3333343333))