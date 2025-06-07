class Solution {
public:
    typedef pair<int, int>P;
    struct comp{
        bool operator()(P &p1, P &p2) {
            if(p1.first == p2.first) {
                return p1.second < p2.second;
            }
            return p1.first > p2.first;
        }
    };

    string clearStars(string s) {
        priority_queue<P, vector<P>, comp> pq;

        for(int i = 0; i < s.size(); i++) {
            if(s[i] == '*' && !pq.empty()) {
                int idx = pq.top().second;
                pq.pop();
                s[idx] = '*';
            }
            else {
                pq.push({s[i], i});
            }


        }

        string ans;

        for(auto &ch : s) {
            if(ch != '*') {
                ans.push_back(ch);
            }
        }

        return ans;

    }
};