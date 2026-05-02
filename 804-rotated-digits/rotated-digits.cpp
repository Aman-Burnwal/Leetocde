class Solution {
public:
    int rotatedDigits(int n) {
        
        unordered_set<int> st{ 3, 4,7};

        unordered_map<int,int>mp{{0, 0}, {1, 1}, {2, 5}, {5, 2}, {6, 9}, {8, 8}, {9, 6}};
        int count = 0;

        for(int num = 2; num <= n; num++) {
            int number = num;
            bool isRotated = true;
            int newNum = 0;
            int revNum = 0;

            while(number > 1) {
                int rem = number % 10;
                if(st.find(rem) != st.end()) {
                    isRotated = false;
                    break;
                }

                newNum *= 10;
                newNum += mp[rem];

                revNum *= 10;
                revNum += rem;

                number /= 10;
            } 

            if(isRotated && newNum !=  revNum) {

                cout<< num;
                count++;
            }
        }
        return count;
    }
};