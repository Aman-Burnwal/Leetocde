/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rs = 0, cs = 0;
    let re = matrix.length - 1, ce = matrix[0].length - 1;
    let ans = []

    while(rs <= re && cs <= ce ) {
        // row 
        for(let c = cs; c <= ce; c++) {
            ans.push(matrix[rs][c])
        }
        rs++;

        for(let r = rs; r <= re; r++) {
            ans.push(matrix[r][ce])
        }
        ce--;

        if(rs <= re) {

            for(let c = ce; c >= cs; c--) {
                ans.push(matrix[re][c])
            }
            re--;
        }
        if(cs <= ce) {
            for(let r = re; r >= rs; r--) {
                ans.push(matrix[r][cs])
            }
            cs++;
        }
    }

    return ans;
};