// Write your code here:
function findMyKeys(strArr) {
  if (strArr.includes('keys')) {
    return strArr.indexOf('keys');
  } else {
    return -1;
  }
};

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
