/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    num = Number(num);
    num = String(num);

    let maxSum = 0;

    for(let i = 0; i < num.length; i++) {
        if(num[i] == 9) {
            maxSum *= 10;
            maxSum += 9;
            continue;
        }

        for(let j = i; j < num.length; j++) {
            maxSum *= 10;
            if(num[j] == num[i]) {
                maxSum += 9;
            }
            else {
                maxSum += Number(num[j]);
            }
        }

        break
    }

    let minSum = 0;

    for(let i = 0; i < num.length; i++) {
        if(num[i] == 1) {
            minSum *= 10;
            minSum += 1;
            continue;
        }
        else if (num[i] == 0) {
            minSum *= 10;
            continue;
        }
        let y = 1;
        if(i != 0) {
            y = 0;
        }

        for(let j = i; j < num.length; j++) {
            minSum *= 10;
            if(num[j] == num[i]){
                minSum += y;
            }
            else minSum += Number(num[j]);
        }
        break;
    }
    return maxSum - minSum;
};