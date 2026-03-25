class Solution {
public:
    bool canPartitionGrid(vector<vector<int>>& grid) {
        int rowSize = grid.size();
        int colSize = grid[0].size();

        vector<long long> rowSums(rowSize, 0);
        vector<long long> colSums(colSize, 0);

        long long totalSum = 0;
        
        for(int row = 0; row < rowSize; row++) {
            for(int col = 0; col < colSize; col++) {
                rowSums[row] += grid[row][col];
                colSums[col] += grid[row][col];

                totalSum += grid[row][col];
            }
        }

        long long curr = 0;


        if(totalSum & 1) return false;


        for(int i = 0; i < rowSize - 1; i++) {
            curr += rowSums[i];
            if((curr * 2) == (totalSum)) return true;
        }

        curr = 0;

        for(int i = 0; i < colSize - 1; i++) {
            curr += colSums[i];
            if((curr * 2) == (totalSum)) return true;
        }

        return false;


    }
};