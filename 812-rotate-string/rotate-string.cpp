class Solution {
public:

    bool is(string &s, string & g, int &size, int i) {

        for(int j = 0; j < size; j++) {
            if(s[(i + j) % size] != g[j]) return false;
        }
        return true;
    }
    bool rotateString(string s, string goal) {

    
        
        int sLen = s.size();
        int gLen = goal.size();

        if(sLen != gLen) return false;

        int start = 0;

        for(int i = 0; i < sLen; i++) {
            if(is(s, goal, sLen, i)) return true;
        }

        return false;


        
    }
};