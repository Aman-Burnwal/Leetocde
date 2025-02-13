class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        
        // priority_queue<int, greater<int>> pq;
        priority_queue < int, vector < int > , greater < int >> pq;
        // priority_queue

        for(auto &num : nums) {

            if(num < k) pq.push(num);
        }

        int count = 0;

        while(!pq.empty()) {
            
            long x = pq.top();

            pq.pop();

            if(!pq.empty()){
                x*= 2;
                x += pq.top();
                pq.pop();
            }
            else x = ( x  + x * 2);

            if(x < k) pq.push(x);

            count++;

            
        
        }
        return count;

    }
};