function findDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        //Duplicates found
        console.log(`${i} - ${j}`);
        return true;
      }
    }
  }
  // return false;
  console.log('No Duplicates');
}

let arr = [1, 3, 2, 5, 4, 1];

findDuplicates(arr);
