/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numberNeedFind = target - nums[i];
    if (!map.has(numberNeedFind)) {
      map.set(nums[i], i);
    } else {
      return [map.get(numberNeedFind), i];
    }
  }
};

const test = [2,7,11,15];
const target = 9;
console.log(twoSum(test, target));
