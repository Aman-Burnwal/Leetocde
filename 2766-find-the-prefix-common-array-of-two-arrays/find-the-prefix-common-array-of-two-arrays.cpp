class Solution {
public:
    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
        int n = A.size();
        vector<int> freq(n + 1, 0);
        vector<int> preFixCommonArray;
        int count = 0;

        for(int idx = 0; idx < n; idx++) {
            int i = A[idx];
            int j = B[idx];

            freq[i]++;
            if(freq[i] == 2) count++;
            freq[j]++;
            if(freq[j] == 2) count++;
            preFixCommonArray.push_back(count);
        }
        return preFixCommonArray;
    }
};