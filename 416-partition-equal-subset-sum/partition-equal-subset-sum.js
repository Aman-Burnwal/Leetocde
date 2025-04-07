/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {


    let sum = 0;

    for(const num of nums) sum += num;

    if( sum % 2 ) return false;
    const half = sum / 2;
    const dp = Array.from({length : nums.length}, () => new Array(half + 1));


    

    return subset( 0, 0 );


    function subset( i, sum ) {

        if(sum == half ) return true;

        if( i >= nums.length || sum > half ) return false;
        if(dp[i][sum] !== undefined) return dp[i][sum];

        return dp[i][sum] = ( subset( i + 1, sum + nums[i] ) ||  subset( i + 1, sum ) )
    }
    
};