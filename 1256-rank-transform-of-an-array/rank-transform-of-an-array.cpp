class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {

        vector<int> copy(arr);
        sort(arr.begin(), arr.end());


        unordered_map< int, int> um;
        int rank = 1;

    

        for(auto ele: arr) {
            // cout << ele << rank << endl ;
            if(um.find(ele) == um.end()) um.insert({ele, rank++});
        }

        vector<int> ans;

        for(auto ele: copy) {
            int rank = um[ele];
            ans.push_back(rank);
        }

        return ans;
    }
};