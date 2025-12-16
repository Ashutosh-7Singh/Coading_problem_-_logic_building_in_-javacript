/**
 * Q01 - Check if a number is positive or negative
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Zero"
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

