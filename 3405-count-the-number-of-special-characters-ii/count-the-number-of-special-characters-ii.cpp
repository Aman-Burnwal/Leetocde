class Solution {
public:
    int numberOfSpecialChars(string word) {
        vector<int> Cap(26, -1);
        vector<int> Sma(26, -1);
        int count = 0;

        for(int i = 0; i <  word.size(); i++) {
            char ch  = word[i];
            if(ch >= 'a' && ch <= 'z') {
               Sma[ch - 'a'] = i;
            }
            else if(Cap[ch - 'A'] == -1) {
                Cap[ch - 'A'] = i;
            }
        }

        for(int i = 0; i < 26; i++) {

            // cout << Cap[i] << ' ' << Sma[i] << endl;
            if(Cap[i] != -1 && Sma[i] != -1 && Cap[i] > Sma[i] ) count++;
        }

        return count;
    }
};