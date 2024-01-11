/*
https://leetcode.com/problems/search-insert-position/description/
*/
var searchInsert = function(nums, target) {
    let defaultResult = -1;
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while(left <= right){        
        mid = Math.floor((left+right)/2);
        const midVal = nums[mid];
        if (midVal === target ) {
            return mid;
        }else if(midVal < target){
            left = mid + 1;
        }else if(target < midVal){
            right = mid - 1;
        }

        if (left > right) {
            mid = left;
        }

    }

    return mid;
};


// var target = 5;
// var target = 2;
var target = 7;
var nums = [1,3,5,6];
var result = searchInsert(nums,target);
console.log('output', result)