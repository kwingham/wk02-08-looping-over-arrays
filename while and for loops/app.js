// Function to convert numbers to their corresponding text
function numberToText(num) {
  const numberTexts = [
    "One frog",
    "Two tadpoles",
    "Three fish",
    "Four hippos 😨",
    "Five crocodiles 💀",
  ];
  return numberTexts[num - 1]; // Subtract 1 to match array index (0-based)
}

for (let i = 1; i <= 5; i++) {
  console.log(`Outer Iteration ${numberToText(i)}`);

  for (let j = 1; j <= 5; j++) {
    console.log(`  Inner Iteration ${numberToText(j)}`);
  }
}

const bugs = ["Goggas", "jumping spiders", "ladybug", "earwig"];

for (let i = 5; i < bugs.length; i++) {
  console.log(`This is a bug: ${bugs[i]}`);
}

const otters = ["Daisy", "Otterly", "Olive", "Phil"];

// A new kind of loop
for (let singleOtter of otters) {
  console.log(singleOtter);
}

otters.forEach(function (otterName) {
  console.log(`This is being logged with forEach: ${otterName} is the cutest!`);
});
