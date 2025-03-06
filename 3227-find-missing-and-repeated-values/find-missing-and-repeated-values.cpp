class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {


        int n = grid.size();

        vector<int> freq(n * n + 1, 0);
        vector<int> ans;

        for(auto &row: grid) {

            for(auto &col: row) {
                
                if(freq[col]) ans.push_back(col);
                freq[col]++;
            }
        }

        for(int i = 1; i < freq.size(); i++) {

            if(freq[i] == 0) {
                ans.push_back(i);
                break;
            }
        }

        return ans;
        
    }
};