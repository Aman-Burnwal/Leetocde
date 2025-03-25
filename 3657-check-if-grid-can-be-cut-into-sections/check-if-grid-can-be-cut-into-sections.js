/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {

    const hor = new Array();
    const ver = new Array();

    for(const[hStart, vStart, hEnd, vEnd] of rectangles) {

        hor.push([hStart, hEnd]);
        ver.push([vStart, vEnd]);
    }
    hor.sort((a, b) => a[0] - b[0]);
    ver.sort((a, b) => a[0] - b[0]);

    

    let h = 0;
    

    let max = hor[0][1] - 1;

    for(let i = 1; i < hor.length; i++) {

        if(hor[i][0] > max) {
            h++;
            max = hor[i][1] - 1;
            if(h == 2) return true;
        }
        else max = Math.max(hor[i][1] - 1, max);
    }

    let v = 0;

    max = ver[0][1] - 1;

    for(let i = 1; i < ver.length; i++) {

        if(ver[i][0] > max) {
            v++;
            max = ver[i][1] -1;
            if(v == 2) return true;
        }
        else max = Math.max(ver[i][1] - 1, max);
    }

    return false;



};