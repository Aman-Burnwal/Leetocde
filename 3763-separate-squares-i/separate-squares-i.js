var separateSquares = function (squares) {
    let min = Infinity;
    let max = -Infinity;

    for (const [x, y, l] of squares) {
        min = Math.min(min, y);
        max = Math.max(max, y + l);
    }
    let ans = 0;
    while (max - min > 1e-6) {
        const mid = (min + max) / 2;
        let below = 0;
        let above = 0;

        for (const [x, y, l] of squares) {
            const top = y + l;

            if (mid <= y) {
                above += l * l;
            } else if (mid >= top) {
                below += l * l;
            } else {
                below += (mid - y) * l;
                above += (top - mid) * l;
            }
        }


        if(above <=  below) {
            ans = mid;
            max = mid;
        } else {
            min = mid;
        }
    }

    return ans
};
