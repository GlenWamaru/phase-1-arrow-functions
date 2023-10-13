// Function Expression for addition
const add = function (a, b) {
    return a + b;
  };
  
  // Function Expression for subtraction
  const subtract = function (a, b) {
    return a - b;
  };
  
  console.log(add(2, 3)); // Output: 5
  console.log(subtract(5, 2)); // Output: 3
  
  // Arrow Function for addition
  const addArrow = (a, b) => a + b;
  
  // Arrow Function for subtraction
  const subtractArrow = (a, b) => a - b;
  
  console.log(addArrow(2, 3)); // Output: 5
  console.log(subtractArrow(5, 2)); // Output: 3
  
  // Example of using arrow functions with the map method
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  console.log(squares); // Output: [1, 4, 9]
  