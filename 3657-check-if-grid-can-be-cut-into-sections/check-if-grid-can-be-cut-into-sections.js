/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {

    // const hor = new Array();
    // const ver = new Array();

    // for(const[hStart, vStart, hEnd, vEnd] of rectangles) {

    //     hor.push([hStart, hEnd]);
    //     ver.push([vStart, vEnd]);
    // }
    rectangles.sort((a, b) => a[0] - b[0]);
    // ver.sort((a, b) => a[0] - b[0]);

    

    let h = 0;
    

    let max = rectangles[0][2] - 1;

    for(let i = 1; i < rectangles.length; i++) {

        if(rectangles[i][0] > max) {
            h++;
            max = rectangles[i][2] - 1;
            if(h == 2) return true;
        }
        else max = Math.max(rectangles[i][2] - 1, max);
    }

    let v = 0;
    rectangles.sort((a, b) => a[1] - b[1]);

    max = rectangles[0][3] - 1;

    for(let i = 1; i < rectangles.length; i++) {

        if(rectangles[i][1] > max) {
            v++;
            max = rectangles[i][3] -1;
            if(v == 2) return true;
        }
        else max = Math.max(rectangles[i][3] - 1, max);
    }

    return false;



};