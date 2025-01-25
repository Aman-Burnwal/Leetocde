class Solution {
public:
    vector<int> lexicographicallySmallestArray(vector<int>& nums, int limit) {
        int n = nums.size();

        vector<int> vec(nums);

        sort(vec.begin(), vec.end());

        int idx = 0;
        unordered_map<int, int>numberIdx;

        unordered_map<int, list<int>> nayaNums;


        numberIdx[vec[0]] = idx;

        nayaNums[idx].push_back(vec[0]);


        for(int i = 1; i < n; i++) {

            if(abs(vec[i] - vec[i - 1]) > limit ) {
                idx++;
            }
            numberIdx[vec[i]] = idx;
            nayaNums[idx].push_back(vec[i]);
        }


        for(int i = 0; i < n; i++) {

            idx = numberIdx[nums[i]];

            int num = *(nayaNums[idx].begin());
            nayaNums[idx].pop_front();

            nums[i] = num;
        }

        return nums;


    }
};