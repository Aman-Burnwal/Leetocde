/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    
    let n = maze.length;
    let m = maze[0].length;
    

    return BFS()

    function BFS() {

        let level = 0;

        let que = new Array();
        que.push(entrance);
        
        

        while(que.length) {

            let len= que.length;
            

           

            while(len--) {

                let [row, col] = que.shift()
            
                if((row == 0 || col == 0 || row == n - 1 || col == m - 1) && ((row + "_" + col) != (entrance[0] + "_" + entrance[1])) ) return level;
          

                if(row > 0 && maze[row - 1][col] == ".") {
                    que.push([row - 1, col]);
                    maze[row - 1][col] = "+"
                }
                if(col > 0 && maze[row][col - 1] == ".") {
                    que.push([row, col - 1]);
                    maze[row][col - 1] = "+"
                }
                
                if(row + 1 < n && maze[row + 1][col] == ".") {
                    que.push([row + 1, col]);
                    maze[row + 1][col] = "+"
                }
                if(col + 1 < m && maze[row][col + 1] == ".") {
                    que.push([row, col + 1]);
                    maze[row][col + 1] = "+";
                }
                
            }
            level++;



        }

        return -1;
    }
};