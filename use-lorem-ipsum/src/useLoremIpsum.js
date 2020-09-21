// generate random words
const randomWord = (count) => {
  const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 
  'z'];
  let phrase = "";
  for (var x = 0; x < count; x++) {
      for (var y = 0; y < 5; y++) {
          phrase = phrase + myArray[Math.floor(Math.random() * myArray.length)];
      }
      phrase = phrase + " ";
  }
  return phrase;
}

// generate sentence
const randomSentence = (count) => {
  const mySentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  return count > 0 ? mySentence.repeat(count) : "";
}

// generate paragraphs
const randomPara = (count) => {
  const myPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Congue quisque egestas diam in arcu cursus. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Ornare suspendisse sed nisi lacus sed viverra tellus in. Volutpat blandit aliquam etiam erat velit scelerisque. Tellus cras adipiscing enim eu turpis egestas. Rutrum quisque non tellus orci ac. Consequat interdum varius sit amet mattis vulputate enim nulla. Euismod in pellentesque massa placerat duis ultricies lacus. Erat velit scelerisque in dictum non consectetur. Vitae ultricies leo integer malesuada nunc. Enim lobortis scelerisque fermentum dui faucibus. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Dolor sit amet consectetur adipiscing elit. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor at auctor urna nunc id cursus metus aliquam."
  return count > 0 ? myPara.repeat(count) : "";
}

export default function useLoremIpsum (type, countFor) {
  let count = typeof(countFor) === "number" ? countFor : 2;
  switch(type) {
  case "words":
    return randomWord(count);
    break;
  case "sentences":
    return randomSentence(count);
    break;
  case "paragraphs":
    return randomPara(count);
    break;
  default:
    return "sorry you have provided the wrong word try one of words, sentences, paragraphs"
  }
}