class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {

        long long sum = mass;
        sort(asteroids.begin(), asteroids.end());

        for(auto &asteroid : asteroids) {
            
            if(sum < asteroid) return false;
            sum += asteroid;
        }
        return true;
    }
};