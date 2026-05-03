class Solution {
public:

    vector<int> buildLPS(string pattern) {
        int n = pattern.size();
        vector<int> lps(n, 0);

        int len = 0;
        for(int i = 1; i < n; ) {
            if(pattern[i] == pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if(len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

    bool rotateString(string s, string goal) {

        if(s.size() != goal.size()) return false;

        vector<int> lbs = buildLPS(goal);

        int i = 0, j = 0;

        string doubleS = s + s;
        while(i < doubleS.size()) {
            if(doubleS[i] == goal[j]) {
                i++;
                j++;
                if(j == goal.size()) return true;
            }
            else {
                if(j == 0) i++;
                else {
                    j = lbs[j - 1];
                }
            }
        }
        return false;
    }
};