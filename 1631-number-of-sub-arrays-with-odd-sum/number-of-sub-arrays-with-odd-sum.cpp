class Solution {
public:
    int numOfSubarrays(vector<int>& arr) {

        int evenSum = 1;
        int oddSum = 0, count = 0, sum = 0;
        
        int mod = 10e8 + 7;

        for(auto &num : arr) {

            sum += num;

            if(sum % 2) {

                oddSum++;
                count = (count + evenSum) % mod;
            }
            else {
                evenSum++;
                count = (count + oddSum) % mod;
            }
        }

        return count;
    }
};