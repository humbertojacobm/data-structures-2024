// https://leetcode.com/problems/plus-one/description/
var plusOne = function(digits) {
    let nextDigitResidue = 0;
    let lastDigit;
    let lastStepIndex = digits.length -1;
    do {
        lastDigit = digits[lastStepIndex];
        if (lastStepIndex === digits.length -1) {
            lastDigit++;
        }
        lastDigit += nextDigitResidue;
        if (lastDigit>9) {
            nextDigitResidue = 1;//enter again to the loop
            lastDigit = 0
        }else{
            nextDigitResidue = 0;
        }
        digits[lastStepIndex] = lastDigit;
        lastStepIndex--;
    } while (nextDigitResidue && lastStepIndex >= 0);

    if (nextDigitResidue > 0) {
        digits.unshift(1);
    }

    return digits;
};

var digits = [1,2,3]
// var digits = [4,3,2,1];
// var digits = [9,9];
// var digits = [9];
// var digits = [8,9,9,9];
var result = plusOne(digits);
console.log('result', result);