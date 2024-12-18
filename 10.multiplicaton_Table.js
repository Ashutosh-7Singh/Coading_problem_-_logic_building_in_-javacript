/*
Write a fuction that generates and prints a multiplication table for a given number up to a specified reange

inptut : 2 positive Numbers
* table of 
* table till
Return :Nothing 
4,10=>4,8,12,.....40
*/


function table(tableOf, tableTill) {
  for (i = 1; i <=tableTill; i++) {
    console.log(`${tableOf}*${i}=${i * tableOf}`);
  }
}

table(15,10)



/*
function tableBYSum(tableOf, tableTill) {
    for (i = tableOf; i <=tableOf*tableTill; i+tableOf) {
      console.log(i);
    }
  }
  
  table(15,10)
  */