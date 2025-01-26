class Solution {
public:

    int BFS(int start, unordered_map<int, vector<int>> &adj, vector<bool> &visited) {

        queue<pair<int, int>> que;

        que.push({start, 0});

        int maxDistance = 0;


        while(!que.empty()) {

            auto [currNode, dist] = que.front();
            que.pop();

            for(auto &ngbr: adj[currNode]) {

                if(!visited[ngbr]) {

                    que.push({ngbr, dist + 1});

                    maxDistance = max(dist + 1, maxDistance);
                }
            }
        }
        return maxDistance;
    }
    int maximumInvitations(vector<int>& favorite) {

        int n = favorite.size();
        unordered_map<int, vector<int>> adj;
        vector<bool> visited(n, false);

        for(int i = 0; i < n; i++) {

            adj[favorite[i]].push_back(i);
        }

        int longCycleElementCount = 0;
        int happyCoupleElementCount = 0;


        for(int i = 0; i < n; i++) {

            if(!visited[i]) {


                unordered_map<int, int> mp;

                int currNode = i;
                int currNodeCount = 0;

                while(!visited[currNode]) {
                    visited[currNode] = true;
                    mp[currNode] = currNodeCount;

                    int nextNode = favorite[currNode];
                    currNodeCount += 1;
                    // cout<<"hello" << endl;

                    if(mp.count(nextNode)) {

                        

                        int cycleLength = currNodeCount - mp[nextNode];

                        longCycleElementCount = max(longCycleElementCount, cycleLength);

                        if(cycleLength == 2) {
                            vector<bool> visitedNodes(n, false);

                            visitedNodes[currNode] = true;
                            visitedNodes[nextNode] = true;

                           

                            happyCoupleElementCount += 2 + BFS(currNode, adj, visitedNodes) + BFS(nextNode, adj, visitedNodes);
                        }
                        break;
                    }
                    currNode = nextNode;
                }

            }
        }

        return max(happyCoupleElementCount, longCycleElementCount );
        
    }
};