class Solution {

private: 

    void minimum(int u,int & ans, unordered_map<int, vector<pair<int, int>>> &mp, vector<bool> &visited)  {

        if(visited[u]) return;

        visited[u] = true;

        if(mp.find(u) != mp.end()) {

            vector<pair<int, int>> directions = mp[u];

            for(auto dir : directions) {
                int v = dir.first;
                int d = dir.second;
                ans = min(ans, d);
                minimum(v, ans , mp, visited);
            
            }
        }

    }
public:
    int minScore(int n, vector<vector<int>>& roads) {
        
        unordered_map<int, vector<pair<int, int>>> mp;

        for(auto & arr : roads) {
            int u = arr[0];
            int v = arr[1];
            int d = arr[2];


            mp[u].push_back({v, d});
            mp[v].push_back({u, d});

        }

        vector<bool> v(n + 1, false);
        int ans = INT_MAX;

        minimum(1, ans, mp, v);

        return ans;
    }
};