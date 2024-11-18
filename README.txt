Challenge: Array Element Types
Objective: Write a JavaScript function that categorizes elements of an array based on their data types and returns an organized object.

Instructions:

Create a function named categorizeArrayElements that accepts a single parameter, an array containing elements of various data types.

The function should iterate over the array and categorize each element by its data type.

Return an object where each key is a data type (as a string), and each value is an array containing all elements of that type from the input array.

Example:



function categorizeArrayElements(arr) {
    // Your code here
}
const mixedArray = [42, "text", null, false, undefined, { key: "value" }, [1, 2, 3], function() {}];
const categorizedResult = categorizeArrayElements(mixedArray);
console.log(categorizedResult);
// Output should be something like:
// {
//   number: [42],
//   string: ["text"],
//   object: [null, { key: "value" }, [1, 2, 3]],
//   boolean: [false],
//   undefined: [undefined],
//   function: [function() {}]
// }