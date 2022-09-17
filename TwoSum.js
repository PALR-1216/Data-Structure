var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(`${[i, j]}`);
        return [i, j];
      }
    }
  }
};

let array = [1, 4, 3, 6, 2, 8];
let target = 8;

twoSum(array, target);
