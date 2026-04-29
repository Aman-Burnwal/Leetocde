class Solution {
public:
    int minOperations(vector<vector<int>>& grid, int x) {
        
        vector<int> arr;

        for(auto row: grid) {
            for(auto col: row) {
                arr.push_back(col);
            }
        }

        sort(arr.begin(), arr.end());

    
        int mid = arr.size()  / 2;
        int count = 0;

        int midValue = arr[mid];

        for(int i = 0; i < arr.size(); i++ ) {
            int rem = abs(arr[i] - midValue);
            
            if(rem % x != 0) return -1;
            count += rem / x;
        }
        return count;
    }

};