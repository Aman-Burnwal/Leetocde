var isTrionic = function(nums) {
    const n = nums.length;
    if (n < 3) return false;

    let i = 1;

    while (i < n && nums[i] > nums[i - 1]) i++;
    if (i === 1) return false;


    let mid = i;
    while (i < n && nums[i] < nums[i - 1]) i++;
    if (i === mid) return false;

    let end = i;
    while (i < n && nums[i] > nums[i - 1]) i++;
    if (i === end) return false;

    return i === n;
};
