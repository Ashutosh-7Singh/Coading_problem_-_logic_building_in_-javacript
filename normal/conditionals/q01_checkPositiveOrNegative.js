/**
 * Q01 - Check if a number is positive or negative
 *
 * Problem statement:
 * Given a numeric input `n`, determine whether the number is positive, negative, or zero.
 *
 * Input:
 * - A single value `n` (typically a number). Tests normally pass numeric inputs.
 *
 * Output:
 * - Return or print one of the strings: 'Positive', 'Negative', or 'Zero'.
 * - If the input is not a number, the implementation may print an error message or
 *   return a helpful message depending on local conventions (many files print to console).
 *
 * Constraints & notes:
 * - Accept integer and floating-point numbers.
 * - Non-numeric inputs should be treated as invalid; typical behavior is to print
 *   an error message and exit.
 *
 * Examples:
 * - Input: 10  => Output: 'Positive'
 * - Input: -3  => Output: 'Negative'
 * - Input: 0   => Output: 'Zero'
 *
 * Edge cases:
 * - Very large or small numeric values should still be classified by sign.
 * - Non-numeric inputs should be handled gracefully (print message or return an error).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q1: Check if a number is positive or negative
// Implement `solve(n)` to return: 'Positive', 'Negative', or 'Zero'.

// 


function checkNumber(n){
    if(typeof n !=='number') {console.log('Input is not a number ');
        return;
    }
    // if(n>0) return 'Positive';
    // else if (n<0) return 'Negative';
    // else return 'Zero'

    // return n>0? 'Positive':(n<0?'Negative':'Zero'); 

    if(n>0){
        console.log('Positive');
    }else if(n<0){
        console.log('Negative');
    }else{
        console.log('Zero');
    }
}

// print example output when run directl
checkNumber("00");

