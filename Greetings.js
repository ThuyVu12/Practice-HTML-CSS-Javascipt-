// Write your code here:
function shoutGreetings(array) {
  let newGreetings = [];
  for (let i = 0; i < array.length; i++) {
    const newGreeting = array[i].toUpperCase();
    newGreetings.push(newGreeting + '!');
  }
  return newGreetings;
};


// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

