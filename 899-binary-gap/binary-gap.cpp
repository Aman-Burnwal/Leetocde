class Solution {
public:
    int binaryGap(int n) {
        
        int curr = -1;
        int maxi = 0;
        for(int idx = 0; idx < 32 && n > 0; idx++) {

            if((1 & n) == 1) {
                cout<< n << endl;
                curr++;
                maxi = max(maxi, curr);
                curr = 0;
            }
            else if(curr != -1) curr++;


            n = n >> 1;
            
        }


        return max(maxi, curr);
    }
};