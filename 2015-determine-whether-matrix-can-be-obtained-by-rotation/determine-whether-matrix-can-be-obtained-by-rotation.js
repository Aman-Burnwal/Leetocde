/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    
    let canBeEqual = true;
    let fn = target.length;
    let fm = target[0].length;

    let mn = mat.length;
    let mm = mat[0].length;
    // phase 1

    if(fn != mn || fm != mm) {
        canBeEqual = false;
    }
    else {
        for(let i = 0; i < fn; i++) {
            if(canBeEqual === false) break;
            for(let j = 0; j < fm; j++) {
                if(mat[i][j] != target[i][j]) {
                    canBeEqual = false;
                    break;
                }
            }
        }
    }

    if(canBeEqual) return true;
    canBeEqual = true;

    // phase 2
    if(fn != mm || fm != mn) {
        canBeEqual = false;
    }
    else {
        for(let i = 0; i < fn; i++) {
            if(canBeEqual === false) break;
            for(let j = 0; j < fm; j++) {
                if(mat[i][j] != target[j][fm - i - 1]) {
                    canBeEqual = false;
                    break;
                }
            }
        }
    }

    if(canBeEqual) return true;
    canBeEqual = true;


        // phase 3 (180 degree)
    if(fn != mn || fm != mm) {
        canBeEqual = false;
    }
    else {
    for(let i = 0; i < fn; i++) {
            if(!canBeEqual) break;
            for(let j = 0; j < fm; j++) {
                if(mat[i][j] != target[fn - i - 1][fm - j - 1]) {
                    canBeEqual = false;
                    break;
                }
            }
        } 
    }

    if(canBeEqual) return true;
    canBeEqual = true;


    // phase 4 (270 degree)
    if(fn != mm || fm != mn) {
        canBeEqual = false;
    }
    else {
        for(let i = 0; i < fn; i++) {
            if(!canBeEqual) break;
            for(let j = 0; j < fm; j++) {
                if(mat[i][j] != target[fm - j - 1][i]) {
                    canBeEqual = false;
                    break;
                }
            }
        }
    }

    return canBeEqual;
};