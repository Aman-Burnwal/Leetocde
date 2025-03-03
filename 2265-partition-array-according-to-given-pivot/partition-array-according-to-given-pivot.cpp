class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int pivot) {
        

        vector<int> ans(nums.size());

        int left = 0; 
        int right = nums.size() - 1;
        int i = 0, same = 0;
        int j = right;

        while(j >= 0 ) {

            if(nums[i] < pivot) ans[left++]= nums[i];
            if(nums[j] > pivot) ans[right--] = nums[j];
            if(nums[i] == pivot) same++;
            i++;
            j--;
        }

        while(same--) ans[left++] = pivot;

        return ans;

        
    }
};