
/* 
- Prompt GPT to create a function that generates random seltzer water flavors like Funky Raspberry Pineapple, Wacky Strawberry Whipped Cream, Zippy Pineapple Mango [Adjective Flavor Flavor].
- Flavor titles should be capitalized!
- Give GPT example inputs and outputs (function should accept an array of adjectives and an array of flavors)
- Ask GPT to generate the arrays. Your decision if they’re delicious, weird, bizarre 
- Test the function and iterate if GPT doesn’t produce exactly what you want 
*/

function generateRandomFlavor(adjectives, flavors) {
  const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
  
  const randomAdjective = getRandomElement(adjectives);
  const randomFlavor = getRandomElement(flavors);

  const formattedFlavor = `${randomAdjective} ${randomFlavor}`;
  return formattedFlavor.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Example arrays of adjectives and flavors
const adjectives = ["Funky", "Wacky", "Zippy", "Tasty", "Bubbly"];
const flavors = ["Raspberry", "Strawberry", "Pineapple", "Mango", "Whipped Cream"];

// Generate a random seltzer water flavor
const randomSeltzerFlavor = generateRandomFlavor(adjectives, flavors);
console.log(randomSeltzerFlavor);
