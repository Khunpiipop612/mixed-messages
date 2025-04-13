// Messages of the day
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going."
];

const fortunes = [
  "You will meet someone interesting today.",
  "Luck is heading your way.",
  "You will find what you’ve been looking for.",
  "Adventure is around the corner."
];

const advice = [
  "Never trust a taco that smiles at you.",
  "Don’t eat yellow snow.",
  "If you can’t convince them, confuse them.",
  "Dance like the Wi-Fi is down."
];

function getRandomMessage(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index]; 
}

function generateMessage() {
  const randomQuotes = getRandomMessage(quotes);
  const randomFortunes = getRandomMessage(fortunes);
  const randomAdvices = getRandomMessage(advice);

  console.log("Awesome, " + randomQuotes);
  console.log("Excellent, " + randomFortunes);
  console.log("Fantastic, " + randomAdvices);
};

generateMessage();