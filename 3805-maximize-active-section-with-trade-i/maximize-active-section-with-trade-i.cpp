class Solution {
public:
    int maxActiveSectionsAfterTrade(string s) {
        int n = s.size();
        int cnt1 = count(s.begin(), s.end(), '1');

        int prev = INT_MIN;
        int bestSum = 0;

        int i = 0;
        while(i < n) {
            int idx = i;

            while(i < n && s[i] == s[idx]) i++;

            if(s[idx] == '0') {
                int curr = i - idx;
                bestSum = max(bestSum, prev + curr );
                prev = curr;
            }
        }

        return bestSum + cnt1;
    }
};