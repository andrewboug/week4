// One comparison intentionally disagrees with the stated rule.
const learnerCount = 7;
const kitCount = 7;
const deskIsOpen = true;

if (!deskIsOpen) {
  console.log("The desk is closed.");
} else if (kitCount >= learnerCount) {
  console.log("Enough kits.");
} else {
  console.log("More kits needed.");
}

// After required practice, open supply-desk.js in your editor and run node supply-desk.js from this folder. All values are fictional. The supply desk can pack a group when the desk is open and it has at least as many kits as learners. A closed desk always prints its closure message first.

// Before changing the logic, predict the message for 7 learners with 6, 7, and 8 kits while the desk is open. Also predict it with 7 kits when the desk is closed. Change only the inputs to run each case; compare the expected and observed outputs. Locate the one comparison that violates the rule, make the smallest repair, and run all four cases again.
//6 and 7 would need more kits, while 8 would have enough kits.
//If the desk is closed with 7 kits, the message would be the desk is closed no matter the number of kits.

// Record the failing input, the expected and observed messages, the expression you changed, and the retest result. Explain why testing just 8 kits would not have exposed the issue.
//You have to change else if (kitCount >= learnerCount) in line 8 because 7 kits and 7 learners should return enough kits, but the way it is written now it doesnt.
