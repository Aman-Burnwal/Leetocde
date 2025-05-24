class Solution {
public:
    vector<int> findWordsContaining(vector<string>& words, char x) {
        
        vector<int> indexed_array;

        for(int i = 0; i < words.size(); i++) {

            if(words[i].find(x) != string::npos)  indexed_array.push_back(i);
        }

        return indexed_array;
    }
};