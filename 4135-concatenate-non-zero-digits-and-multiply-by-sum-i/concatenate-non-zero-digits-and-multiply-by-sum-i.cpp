class Solution {
public:
    long long sumAndMultiply(int n) {
        long long ans = 0;
        long long sum = 0;
        int mul = 0;

        while(n > 0) {
            int mod = n % 10;
            n /= 10;
            if(mod == 0) continue;

            sum += mod;
            mod *= pow(10, mul++);
            ans += mod;

        }

        return ans * sum;
    }
};