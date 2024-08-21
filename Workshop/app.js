// Array of favorite animals
const favoriteAnimals = ["Dog", "Frog", "Elephant", "Crocodile"];

// Using a for loop to log favorite animals
for (let i = 0; i < favoriteAnimals.length; i++) {
  console.log(`Animal: ${favoriteAnimals[i]}`);
}

// Another loop type example: Using for...of loop
for (let animal of favoriteAnimals) {
  console.log(`Favorite Animal: ${animal}`);
}

// Array of favorite colors
const favoriteColors = ["Blue", "Green", "Teal", "Pink"];

// Using a forEach loop to log favorite colors
favoriteColors.forEach(function (color) {
  console.log(`Color: ${color}`);
});

// Array of favorite numbers
const favoriteNumbers = [3, 5, 8, 23, 33, Infinity];

// Using a while loop to log favorite numbers
let i = 0;
while (i < favoriteNumbers.length) {
  console.log(`Number: ${favoriteNumbers[i]}`);
  i++;
}

// Using a for loop with a break condition to avoid infinite loop with Infinity
for (let i = 0; i < favoriteNumbers.length; i++) {
  if (favoriteNumbers[i] === Infinity) {
    console.log("Reached Infinity, stopping loop.");
    break; // Exit the loop to prevent an infinite loop
  }
  console.log(`Favorite Number: ${favoriteNumbers[i]}`);
}
