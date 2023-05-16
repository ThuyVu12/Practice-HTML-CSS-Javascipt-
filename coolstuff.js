// Write your code here:
/* function justCoolStuff(strArray1, strArray2) {
  let resultArr = [];
  for (let i = 0; i < strArray1.length; i++) {
    for (let j = 0; j < strArray2.length; j++) {
      if (strArray1[i] === strArray2[j]) {
        resultArr.push(strArray1[i]); 
      }
    }
  }
  return resultArr;
} */

const justCoolStuff = (strArray1, strArray2) => strArray1.filter(element  => strArray2.includes(element));
// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

