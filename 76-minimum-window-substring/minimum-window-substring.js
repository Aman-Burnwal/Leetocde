/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    const freq = new Map();
    for (const ch of t) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let left = 0, right = 0;
    let required = freq.size; 
    let formed = 0; 
    const windowCount = new Map();

    let ans = [Infinity, 0, 0]; 

    while (right < s.length) {
        const ch = s[right];
        windowCount.set(ch, (windowCount.get(ch) || 0) + 1);

        if (freq.has(ch) && windowCount.get(ch) === freq.get(ch)) {
            formed++;
        }

        while (left <= right && formed === required) {
            if (right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            const leftChar = s[left];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);
            if (freq.has(leftChar) && windowCount.get(leftChar) < freq.get(leftChar)) {
                formed--;
            }
            left++;
        }

        right++;
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
};
