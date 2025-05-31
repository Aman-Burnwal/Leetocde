/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const arr = [];

    // 1️⃣ Flatten the board using zigzag pattern
    let reverse = false;
    for (let i = n - 1; i >= 0; i--) {
        const row = board[i];
        if (!reverse) {
            for (let j = 0; j < n; j++) {
                arr.push(row[j]);
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                arr.push(row[j]);
            }
        }
        reverse = !reverse;
    }

    // 2️⃣ BFS initialization
    const visited = new Array(n * n).fill(false);
    const queue = [];
    queue.push(0);
    visited[0] = true;

    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            if (curr === n * n - 1) {
                return steps;
            }

            // 3️⃣ Check next 1 to 6 moves
            for (let dice = 1; dice <= 6; dice++) {
                let next = curr + dice;
                if (next >= n * n) continue;

                if (arr[next] !== -1) {
                    next = arr[next] - 1; // convert to 0-based index
                }

                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
        steps++;
    }

    // 4️⃣ If goal is unreachable
    return -1;
};
