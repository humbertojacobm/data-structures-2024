/*
https://leetcode.com/problems/remove-element/
*/
var removeElement = function (nums, val) {    
    var newNums = [];    
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if (num !== val) {
            newNums.push(num);
        }
    }
    let j= 0;
    for (let index = 0; index < newNums.length; index++) {
        const number = newNums[index];
        nums[j] = number;
        j++;
    }
    nums.length = j;
    console.log('removeElement nums',nums);
    return nums.length;
};

var nums = [0,1,2,2,3,0,4,2];
var k = removeElement(nums, 2);

console.log('k', k);
console.log('nums',nums);