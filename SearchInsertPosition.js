/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */

const searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (!nums.includes(target)) {
    nums.push(target);
    return nums
      .sort((a, b) => Number(a) - Number(b))
      .findIndex((el) => el == target);
  } else {
    return nums.findIndex((el) => el == target);
  }
};
