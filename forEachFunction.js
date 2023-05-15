const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = array => {
  array.forEach(element => {
    politelyDecline(element);
    });
}

declineEverything(veggies);

const acceptEverything = array => {
  array.forEach(element => {
    console.log(`Ok, I guess I will eat some ${element}.`);
  });
}

acceptEverything(veggies);
