/**
 * Q07 - Check vowel or consonant
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Input must be a single character"
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