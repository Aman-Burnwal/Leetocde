class Solution {
public:
    int rec(int i, vector<int>& nums, vector<int>&memo, int &target) {
        int n = nums.size();
        if(i == n - 1) return 0;
        if(i == n) return INT_MIN;
        if(memo[i] != -2) return memo[i];
        
        int maxi = INT_MIN;

        for(int j = i + 1; j < n; j++) {
            int val = nums[j] - nums[i];
            if(-target <= val && val <= target) {
                maxi = max(maxi, 1 + rec(j, nums, memo, target));
            }
        }

        return memo[i] = maxi;
    } 
    int maximumJumps(vector<int>& nums, int target) {
        vector<int> memo(nums.size(), -2);
        int ans = rec(0, nums, memo, target);

        return ans < 0 ? -1 : ans;
    }
};