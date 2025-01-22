/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(arr, n) {
    
    let len = arr.length

    for(let i = 0; i < len; i++) {

        if(arr[i] == 0 && ((i > 0 && arr[i - 1] == 0) || i == 0) && ((i < len - 1 && arr[i + 1] == 0 )|| i == len - 1)) {

            arr[i] = 1;
            n--
        }
    }

    return n <= 0;
};