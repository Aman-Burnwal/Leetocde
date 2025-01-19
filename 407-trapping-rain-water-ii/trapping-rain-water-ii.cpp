class Solution {
public:

    typedef pair<int, pair<int, int>> pp;
    vector<vector<int>> direction {{0, 1}, {1, 0}, {-1, 0}, {0 , - 1}};

    int trapRainWater(vector<vector<int>>& heightMap) {



        int n = heightMap.size();
        int m = heightMap[0].size();

        priority_queue<pp, vector<pp>, greater<>> pq;
        vector<vector<bool>> visited(n, vector<bool>(m, false));

        for (int row = 0; row < n; row++) {

            pq.push({heightMap[row][0], {row, 0}});
            pq.push({heightMap[row][m - 1], {row, m - 1}});
            visited[row][0] = true;
            visited[row][m - 1] = true;
        }

        for (int col = 1; col < m - 1; col++) {
            pq.push({heightMap[0][col], {0, col}});
            pq.push({heightMap[n - 1][col], {n - 1, col}});
            visited[0][col] = true;
            visited[n - 1][col] = true;
        }

        int water = 0;

        while(!pq.empty()) {

            pp p = pq.top();
            pq.pop();

            int height = p.first;
            int i = p.second.first;
            int j = p.second.second;


            for(auto &dir: direction) {

                int i_ = dir[0] + i;
                int j_ = dir[1] + j;

                if(i_ >= 0 && i_ < n && j_ >= 0 && j_ < m && !visited[i_][j_]) {

                    visited[i_][j_] = true;

                    water += max(0, height - heightMap[i_][j_]);

                    pq.push({max(height, heightMap[i_][j_]), {i_, j_}});

                }
            }


        }

        return water;
    }
};