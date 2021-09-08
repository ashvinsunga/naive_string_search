// THE GOAL OF THIS FUNCTION
// Count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

// Pseudocode
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out the inner loop
// if the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

// Solution 1
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]){
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
        
    }
return count;
}
console.log(naiveSearch("lorie loled", "lo"));