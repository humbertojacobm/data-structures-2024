/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let result = "no response";
    if (!nums || nums.length < 2) {
        result = "the length of nums should be 2 or greater"
        return result;
    }

    let filterNumbers = [];
    for (let index = 0; index < nums.length; index++) {
        let currentValue = nums[index];
        if (currentValue < target) {
            filterNumbers.push(index);
        }        
    }

    if (filterNumbers.length < 2) {
        result = "the nums is wrong, because it should have at least 2 to sum the target"
        return result;
    }

    if (filterNumbers.length == 2 && nums[filterNumbers[0]]+nums[filterNumbers[1]] === target) {
        return filterNumbers;
    }

    let i = 0; 
    let targetSum = 0;
    let finalIndexes = [];
    while (targetSum !== target) {
        targetSum += nums[i];
        if (targetSum<=target) {
            console.log("index less than target", i);
            finalIndexes.push(i);               
        }else{
            console.log("enter here", i);
            targetSum -= nums[i];                        
        }
        i++;   
        if (i >= nums.length && targetSum !== target) {
            finalIndexes.shift();
            i = finalIndexes[0];
            finalIndexes.length = 0;
            targetSum = 0;
        }      
    }

    result = finalIndexes;
    return result;    
};

// console.log(twoSum([2], 9));
// console.log(twoSum([2,3,4,11,15], 9));
// console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));