/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
   for( let i=0; i< s.length; i++ ){
    while (s.includes(part)){
      s =  s.replace(part,"");
    }
   }
   return s;
}