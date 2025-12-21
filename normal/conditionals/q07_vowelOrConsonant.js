/**
 * Q07 - Check vowel or consonant
 *
 * Problem statement:
 * Given a single character, determine whether it is a vowel or a consonant.
 *
 * Input:
 * - A single-character string `ch`.
 *
 * Output:
 * - Return or print 'Vowel' for letters a, e, i, o, u (case-insensitive), otherwise 'Consonant'.
 * - If the input is not a single alphabetic character, return/print an error message
 *   such as 'Input must be a single character'.
 *
 * Constraints & notes:
 * - Only alphabetic characters are valid; digits and symbols are invalid input.
 * - Treat uppercase and lowercase letters equivalently.
 *
 * Examples:
 * - Input: 'a' => Output: 'Vowel'
 * - Input: 'B' => Output: 'Consonant'
 * - Input: 'ab'=> Output: 'Input must be a single character'
 *
 * Edge cases:
 * - Non-letter characters (digits, punctuation) should be rejected.
 * - Empty strings or multi-character strings should be rejected.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q7: Check if a character is a vowel or consonant
// Implement `solve(ch)` to return: 'Vowel', 'Consonant', or error message for invalid input.

function vowelOrConsonent(char){
  if (typeof char !== 'string' ){
    console.log("Input must be a single character");
    return;
  }

  if (char.length !== 1){
    console.log("Input must be a single character");
    return;
  }
// 1
  // if(char=== 'a' || char=== 'e' || char === 'i' || char==='o' || char === 'u'){
  //   console.log("Vowel")
  // }else{
  //   console.log("Consonent")
  // }

  // 2
//   switch (char){
//     case 'a':
//       case 'i':
//         case 'o':
//           case 'u':
//             case 'e':
//               console.log("Vowel");
//               break;
// default:
//   console.log("Consonent");
//   }

// 4

const vowel = "aeiouAEIOU";
let isVowel= false;

for (i=0;i<vowel.length;i++){
 if(char===vowel[i])
 {
  isVowel=true
break;
 }
}

if(isVowel){
  console.log("Vowel")
}else{
  console.log("Consonent")
}
  // 3
  // const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];

  // if (vowels.includes(char)){
  //   console.log("Vowel");
  // }else{
  //   console.log("Consonant");
  // }         
} 
vowelOrConsonent('a');