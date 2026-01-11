/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    
    const matrixLength = matrix.length;
    const currHeight = new Array(matrix[0].length).fill(0);

    let maxArea = 0;

    for(let row = 0; row < matrixLength; row++) {
        for(let col = 0; col < matrix[0].length; col++) {

            if(matrix[row][col] === '1') {
                currHeight[col]++;
            }
            else currHeight[col] = 0;
        }

        maxArea = Math.max(maxArea, histogramFun(currHeight))
    }
    return maxArea;

    function histogramFun(height) {

        const left = new Array(height.length)
        const right = new Array(height.length)
        left[0] = -1;

        for(let i = 1; i < height.length; i++) {
            let lastIndex = i - 1;

            while(lastIndex >= 0 && height[lastIndex] >= height[i]) lastIndex--;
            left[i] = lastIndex;
        }

        right[height.length - 1] = height.length;
        for(let i = height.length - 2; i >= 0; i--) {
            let lastIndex = i + 1;

            while(lastIndex < height.length && height[lastIndex] >= height[i]) lastIndex++;
            right[i] = lastIndex;
        }
        let maxArea = 0;
        for(let i = 0; i < height.length; i++) {
            let width = right[i] - left[i] - 1;
            let area = width * height[i]
            maxArea = Math.max(maxArea, area)
        }
        return maxArea;
    }

};