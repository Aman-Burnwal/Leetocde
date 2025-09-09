var missingNumber = function(nums) {
    let n = nums.length;
    let xor = 0;

    for(let i = 0; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i]
    }

    return xor ^ n;
};
