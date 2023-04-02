function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through each element
  for (let i = 0; i < array.length; i++){
    //for the current number identify a number that adds up to our target
    const compNum = target - array[i]
    //iterate through the remaining array
    for (let j = i + 1; j < array.length; j++){
      //return true if matching array found
      if (array[j] === compNum){
        return true;
      }
      }
    }
    //if we reach the end of the array and no matching number found return false
    return false
  }


/* 
  Write the Big O time complexity of your function here
  Given an input array of n elements, 
  the worst case scenario is that the algorithm needs to make n² iterations.
  This is expressed as O(n²) in big O notation
*/

/* 
  Add your pseudocode here
  look through each item in the array
  caalculate the number we need to get the target sum
  look through the rest of the array
  check if it matches the target
  return true if there is a matching element
  otherwise return false

*/

/*
  Add written explanation of your solution here
  The function has an array of numbers and a target value
  we should iterate through each element in the array and 
  calculate the number that would need to be added to the 
  element in the array and find out if its equal to the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
