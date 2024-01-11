/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    var storage = new Map();

    for (let index = 0; index < nums.length; index++) {        
        const complement = target - nums[index];
        if (storage.has(complement)) {
            return [storage.get(complement),index];
        }
        storage.set(nums[index],index);
    }
};

// console.log(twoSum([2], 9));
// console.log(twoSum([2,3,4,11,15], 9));
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));