class Solution {
public:
    bool checkPowersOfThree(int n) {
        


        vector<int> powers;

        for(int i = 0; i <= 14; i++) powers.push_back(pow(3, i));


        for(int i = 14; i >= 0; i--) {
            if(powers[i] <= n) n -= powers[i];
        }

        return n == 0;
        
    }
};