/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let ch = chars[0];
    let indx = 0;
    let count = 1;


    for(let i = 1; i < chars.length; i++) {

        if(chars[i] == ch) count++;

        else {

            chars[indx] = ch;
            indx++;


            if(count > 1) {


                
                let countStr = count.toString();

                for(const c of countStr) {

                    chars[indx] = c;
                    indx++;
                }
            }

            count = 1;
            ch = chars[i];


        }
    }

    chars[indx] = ch;
    indx++;


            if(count > 1) {


                
                let countStr = count.toString();

                for(const c of countStr) {

                    chars[indx] = c;
                    indx++;
                }
            }


    return indx;


    
};