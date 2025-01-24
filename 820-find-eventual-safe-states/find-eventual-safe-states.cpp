class Solution {
public:
    
    bool isCycleDFS(int u, vector<vector<int>>&adj, vector<int>&visited, vector<int>&inRecursion) {
        
        
        // if(visited[u] && inRecursion[u]) return false;
        
        visited[u] = true;
        
        inRecursion[u] = true;
        
        for(auto &v : adj[u]) {
            
           
                
            if (visited[v] == false && isCycleDFS(v, adj, visited, inRecursion)) return true;
            
            else if(inRecursion[v]  )return true;
            
        }
        
        inRecursion[u] = false;
        
        return false;
    }
    
    vector<int> eventualSafeNodes(vector<vector<int>>& adj) {
        
                
        vector<int> inRecursion(adj.size(), false);
        vector<int> visited(adj.size(), false);

        for(int i = 0; i < adj.size(); i++) {
            
            if(visited[i]) continue;
            
            isCycleDFS(i, adj, visited, inRecursion);
            
        }
        vector<int> safeNodes;


        for(int i = 0; i < adj.size(); i++ ) {

            if(inRecursion[i] == false) safeNodes.push_back(i);
        }

        return safeNodes;
    }
};