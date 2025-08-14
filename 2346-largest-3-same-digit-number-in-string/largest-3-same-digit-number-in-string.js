var largestGoodInteger = function(num) {
    let maxDigit = -1;

    for (let i = 1; i < num.length - 1; i++) {
        if (num[i] === num[i - 1] && num[i] === num[i + 1]) {
            maxDigit = Math.max(maxDigit, (num[i]));
        }
    }

    if (maxDigit === -1) return "";
    return String(maxDigit).repeat(3);
};
