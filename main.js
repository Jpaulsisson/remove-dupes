
// function removeDupes(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] === nums[i + 1]) {
//         nums.splice(nums[i],1)
//       }
//   } return nums.length;
// };


// function removeDupes(nums) {
//   let noDupes = [...new Set(nums)];
//   return noDupes;
// }

// console.log(removeDupes([1, 1, 2]));

function removeDupes(nums) {
  nums.forEach((element, index) => {
    if (index !== nums.indexOf(element)) {
      nums.splice(element, 1);
    }
  })
  return nums;
}

// console.log(removeDupes([1, 2, 3, 3, 3, 4, 5, 7]));

function removeDupesInPlace(nums) {
  let original = {}; //initialize object
  var k = 0; //init incrementer
  for (var i = 0; i < nums.length; i++) {
    // console.log(`I'm i before if:` + i);   
    // console.log(`I'm original[nums]:` + original[nums]);
    // console.log(`I'm original[nums[i]]:` + original[nums[i]]);
    if (!original[nums[i]]) {  //if original doesn't contain the current element as a 1 item array 
      nums[k++] = nums[i];  //then 
      // console.log(`I'm i after if:` + i);

      console.log(`I'm k:` + k);
      original[nums[i]] = 'original';
    }
  }
  // console.log(`I'm nums immediately before nums.length = k:` + nums)
  nums.length = k;
  return k;
};

// console.log(removeDupesInPlace([1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 7, 7]));

// Given an integer array "nums" sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length
// int k = removeDuplicates(nums); // Calls your implementation
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

const testNums = [0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5]
const test2 = [1, 1, 1, 2, 2, 3]
console.log(testNums.length)

// That giant explanation above basically just says take the sorted array of numbers and only allow 2 or less of each number. If you remove numbers, the length of the array shouldn't change, just replace them with whatever you want and move their previous spot to the end of the array so that the order and the length remain the same

// initial thoughts:
// iterate over the array updating a count variable that goes up when the value is the same as the last and resets to 1 on a new value. splice off the 
// something like:
// if value > previous value, current = value and if count > 2, splice count += 1, then splice on current change and push x to the end of the array the same amount as was spliced off. 

function removeDuplicates(nums) {
  let value = -Infinity
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > value) {
      value = nums[i]
      count = 0
    }
    if (nums[i] == value) {
      count++
    }
    if (count > 2) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

console.log(removeDuplicates(testNums))
console.log(removeDuplicates(test2))