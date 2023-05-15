const convertToBaby = array => {
  let babyAnimals = [];
  for (let i = 0; i < array.length; i++) {
    babyAnimals.push('baby ' + array[i]);
  }
  return babyAnimals;
}



// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)); 

