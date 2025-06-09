/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    const chunckedArr  = [];

    const temp = [];

    for(const num of arr) {
        
        temp.push(num);
        if(temp.length === size) {
            chunckedArr.push([...temp]);
            temp.length = 0;
        }

    }

    if(temp.length) chunckedArr.push(temp);

    return chunckedArr;

};
