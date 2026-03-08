class Solution {

    string check(string str, string & ans , vector<string>& nums) {
            if(ans.length() != 0) return  ans;
            if(str.length() == nums[0].length()) {

                for(int i = 0; i < nums.size(); i++) {
                    if(nums[i] == str) {
                       
                        return "";
                    }
                }
                ans = str;
                return ans;
            }
            str.push_back('0');
            check(str, ans, nums);
            str.pop_back();
            str.push_back('1');
            check(str, ans, nums);
            return ans;
        }

public:
    string findDifferentBinaryString(vector<string>& nums) {
        
        string ans = "";
        return check("", ans, nums);
        
    }
};