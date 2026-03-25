class Solution {
public:
    bool canPartitionGrid(vector<vector<int>>& grid) {
        int rowSize = grid.size();
        int colSize = grid[0].size();

        vector<double> rowSums(rowSize, 0);
        vector<double> colSums(colSize, 0);

        double totalSum = 0;
        


        for(int row = 0; row < rowSize; row++) {
            for(int col = 0; col < colSize; col++) {
                rowSums[row] += grid[row][col];
                colSums[col] += grid[row][col];

                totalSum += grid[row][col];
            }
        }

        double curr = 0;

        double d = 2;
        double one = 1;


        for(int i = 0; i < rowSize - 1; i++) {
            curr += rowSums[i];
            if((curr * d) == (totalSum)) return true;
        }

        curr = 0;

        for(int i = 0; i < colSize - 1; i++) {
            curr += colSums[i];
            if((curr * d) == (totalSum)) return true;
        }

        return false;


    }
};