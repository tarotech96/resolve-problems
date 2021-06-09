/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

const removeDuplicates = function (nums) {
  if (!nums.length) return 0;

  let nonDuplicatesIdx = 1;
  for (let i = 1; i < nums.length; i++) {
    // Add the unique values to our subarray
    if (nums[nonDuplicatesIdx - 1] !== nums[i]) {
      nums[nonDuplicatesIdx++] = nums[i];
    }
  }
  return nonDuplicatesIdx;
};
