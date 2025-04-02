/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   let str="";


    for(let i = 0; i< s.length; i++){
        let word = s.toLowerCase(i);
        let char = word.charCodeAt(i);
        if((char >= 97 && char <= 122) || ( s[i] != " " &&  Number(s[i]) >= 0 && Number(s[i]) <=9)){
            str += word[i];
        }
    }

    console.log(str)
    let f =0;
    let l = str.length - 1;
    while(f < l){
        if(str[f] != str[l]){
            return false;
        }
        f++;
        l--;
    }
    return true;
};