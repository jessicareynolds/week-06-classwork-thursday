/**
Implement a recursive factorial() function which will take a number and compute its factorial value. For example, factorial(5) would return 120 because 5 * 4 * 3 * 2* 1 is 120.
 */
function recursiveSumAll (num) {
    if (num === 1) return 1;
    return num * recursiveSumAll(num - 1);

}

const result1 = recursiveSumAll(5)
console.log(recursiveSumAll(5))
/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
 console.assert(result1 === 120, "Expected 120")
