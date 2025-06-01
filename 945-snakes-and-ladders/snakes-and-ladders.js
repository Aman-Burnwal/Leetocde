/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    const queue = [];
    let steps = 0;
    const visited = new Array(n * n).fill(false);

    queue.push(0);
    visited[0] = true;

    while (queue.length > 0) {
        let size = queue.length;

        for (let idx = 0; idx < size; idx++) {
            let curr = queue.shift();

            if (curr === (n * n - 1)) return steps;

            for (let j = 1; j <= 6; j++) {
                let next = curr + j;
                if (next >= n * n) break;

                let row = (n - 1) - Math.floor(next / n);
                let col = next % n;

                if ((n  % 2 === row % 2))  col = n - 1 - col;
                

                let dest = board[row][col] === -1 ? next : board[row][col] - 1;

                if (!visited[dest]) {
                    queue.push(dest);
                    visited[dest] = true;
                }
            }
        }

        steps++;
    }

    return -1;
};
