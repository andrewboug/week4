const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered;

console.log(activityName);
console.log("Before:", seatsLeft);
console.log("Before register:", registered);
registered = registered + 2;
console.log("Registered:", registered);
console.log("After:", seatsLeft);
console.log("UpdatedRemaining:", capacity - registered);

// 1.predictions: initial seats left 7, updated registration count 11, final seats left 7

// 2. the predictions were correct

// 3. Updated remaining is 5 seats

// 4. I changed the registered number to 7 and got 9 for the before, registered, and after counts; and an updated remaining seats number of 7.

// 5. registered + 2 is further along in the JS code so it doesn't run until after.
