class Solution {
public:
    int minMutation(string startGene, string endGene, vector<string>& bank) {

        unordered_set<string> bankSet(bank.begin(), bank.end());
        unordered_set<string> visited;

        queue<string> que;
        que.push(startGene);
        int level = 0;


        while(!que.empty()) {

            

            int n = que.size();

            while(n--) {

                string curr = que.front();
                que.pop();

                if(curr == endGene) return level;

                for(auto &ch : "ACGT") {

                    for(int i = 0; i < 8; i++) {

                        char c = curr[i];
                        curr[i] = ch;

                        if(bankSet.find(curr) != bankSet.end() && visited.find(curr) == visited.end()) {
                            que.push(curr);
                            visited.insert(curr);
                        }

                        curr[i] = c;
                    }
                }

            }

            level++;
        }

        return -1;


        
    }
};