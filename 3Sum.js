/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = function (nums) {
  let result = {};
  for (let i = 0; i < nums.length - 1; i++) {
    let target = nums[i];
    var set = new Set();
    for (var j = i + 1; j < nums.length; j++) {
      let numberToFind = target + nums[j] !== 0 ? -(target + nums[j]) : 0;

      if (set.has(numberToFind)) {
        let a = [nums[i], numberToFind, nums[j]].sort((a, b) => a - b);
        result[a.join("")] = a;
        set.delete(numberToFind);
      } else {
        set.add(nums[j]);
      }
    }
  }
  return Object.values(result);
};
