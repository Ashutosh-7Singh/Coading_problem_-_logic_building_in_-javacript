// Components index: runs examples for each question component in this folder.

const files = [
  'q01_checkPositiveOrNegative',
  'q02_checkZeroOrNot',
  'q03_evenOrOdd',
  'q04_eligibleToVote',
  'q05_divisibleBy5',
  'q06_divisibleBy11',
  'q07_vowelOrConsonant',
  'q08_upperOrLower',
  'q09_singleDigit',
  'q10_twoDigit',
  'q11_threeDigit',
  'q12_leapYear',
  'q13_divisibleBy3And7',
  'q14_temperatureCategory',
  'q15_greaterThan100',
  'q16_twoNumbersEqual',
  'q17_multipleOf10',
  'q18_negativeZeroPositive',
  'q19_between1and50',
  'q20_ageCategory',
];

function runAll() {
  files.forEach((f) => {
    // require relative to this index file
    const mod = require(`./${f}.js`);
    console.log('---');
    console.log(f + ':', mod.description || 'No description');
    if (typeof mod.runExample === 'function') {
      try {
        mod.runExample();
      } catch (err) {
        console.log('Error while running example for', f, err.message);
      }
    } else {
      console.log('No runExample exported for', f);
    }
  });
}

if (require.main === module) runAll();

module.exports = { runAll };
