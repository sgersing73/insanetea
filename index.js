// Helper function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // Helper function to generate a random integer between min (inclusive) and max (inclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Area of a rectangle with length 4 and width 5:", calculateRectangleArea(4, 5)); // Output: 20
    console.log("Is 6 odd?", isOdd(6));   // Output: false
    console.log("Is 7 odd?", isOdd(7));   // Output: true
  
    // Generate and print 5 random integers between 1 and 100
    console.log("Random integers between 1 and 100:");
    for (let i = 0; i < 5; i++) {
      console.log(getRandomInteger(1, 100));
    }
  }
  
  // Call the main function
  main();  