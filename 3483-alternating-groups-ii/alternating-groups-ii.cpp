class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors, int k) {

        k--;

        int j = 0;

        while(j < k) colors.push_back(colors[j++]);

        int ans = 0;
        j = 0;

        for(int i = 1; i < colors.size(); i++) {

            if(colors[i] == colors[i - 1]) j = i;
            
            else if(i - j == k) {
                ans++;
                j++;
            }
        }

        return ans;
        
    }
};