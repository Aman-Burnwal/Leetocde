/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    


    let n = board.length;

    const queue = new Array();

    let step = 0;
    const visited = new Array(n * n).fill(false);
    visited[0] = true

    queue.push(0);

    while(queue.length > 0) {

        let size = queue.length;
        

        for(let idx = 0; idx < size; idx++) {

            let dice = queue.shift();
          

            if(dice === ((n * n)  -1 )) return step;

            for(let j = 1; j <= 6; j++ ) {

                let next = dice + j

                if(next >= n * n) break;

                let row = (n - 1) - Math.floor( next / n);

                let col = next  % n;

                if( row % 2 == n % 2  ) col = n - 1 - col;
       

                let dest = board[row][col] === -1 ? next : board[row][col] - 1;


                if(!visited[dest]) queue.push(dest)
                visited[dest] = true;


            }


        }

        step++;
    }

    return -1;
};