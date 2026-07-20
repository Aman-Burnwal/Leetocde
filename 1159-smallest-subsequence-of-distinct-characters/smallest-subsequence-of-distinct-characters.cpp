class Solution {
public:
    string smallestSubsequence(string s) {
        vector<int> lastIndex(26, -1);
        for(int i = 0; i < s.size(); i++) {
            int idx = s[i] - 'a';
            lastIndex[idx] = i;
        }

        vector<bool> visited(26, false);
        string ans;

        for(int i = 0;i < s.size(); i++) {
            int idx = s[i] - 'a';
            if(visited[idx]) continue;

            while(ans.size() && ans[ans.size() - 1] > s[i]) {
                int idx2 = lastIndex[ans[ans.size() - 1] - 'a'];
                if(idx2 < i) break;
                visited[ans[ans.size() - 1] - 'a'] = false;
                ans.pop_back();
            }

            ans.push_back(s[i]);
            visited[idx] = true;
        }

        return ans;
    }
};