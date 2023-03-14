
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

console.log(removeDupesInPlace([1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 7, 7]));