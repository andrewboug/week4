const activityName = "Space observation";
const capacity = 10;
const registered = 9;
const seatsLeft = capacity - registered;
const hasSeats = seatsLeft > 0;

console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}

//Run node starter.js from this folder after your own core program or with a TA for targeted recovery. The starter is intentionally wrong. Its intended rule is that a positive remaining seat count selects the available message; zero selects full. Use valid integer counts through capacity.

// Predict the condition and message at 9 registrations out of 10. Run and compare.
//with hasSeats changed to = sedatsLeft > 0, the message becomes "a seat is available"

// Try 10 out of 10. Identify the condition that sends the program down the wrong path.
// The message becomes "the activity is full".

// Fix that comparison while leaving both messages as written. Repeat both tests and record expected versus actual results.
//I changed hasSeats from seatsLeft === 0 to seatsLeft > 0.

// Restore the starting count of 9. Explain why testing only one branch gives limited evidence.
// One branch is at capacity whereas the other branch has a seat available.
