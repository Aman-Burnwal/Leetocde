class Solution {
public:
    int furthestDistanceFromOrigin(string moves) {
        int n = moves.length();

        int L = 0;
        int R = 0, common = 0;

        for(int i = 0; i < n; i++) {

            if(moves[i] == 'L') L++;
            else if(moves[i] == 'R') R++;
            else common++;
        }

        int maxi = abs(L - R) +  common;

        return maxi;
    }
};