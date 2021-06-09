/**
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] == val) {
      if (i == nums.length - 1) {
        nums.pop();
      } else {
        nums[i] += nums[nums.length - 1];
        nums[nums.length - 1] = nums[i] - nums[nums.length - 1];
        nums[i] -= nums[nums.length - 1];
        nums.pop();
      }
    }
  }

  return nums.length;
};
