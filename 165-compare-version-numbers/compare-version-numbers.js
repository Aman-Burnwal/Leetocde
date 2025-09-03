/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v = version1.split(".");
    const v2 = version2.split(".");

    while(v.length < v2.length) v.push("0");
    while(v2.length < v.length) v2.push("0");

    for(let i = 0; i < v.length; i++) {
        if(Number(v[i]) > Number(v2[i])) return 1;
        else if (Number(v[i]) < Number(v2[i])) return -1;
    }

    return 0;
};