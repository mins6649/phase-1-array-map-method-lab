const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let results = []
  tutorials.map(sentence => {
    let words = sentence.split(" ")
    let capitalizedSentence = []
    words.map(word => {
      capitalizedSentence.push(word.replace(word[0], word[0].toUpperCase()))      
    })
    results.push(capitalizedSentence.join(" "))
  })
  return results;
  // const titles =[];
  // for (let element1 of tutorials){
  //   let words = element1.split(" ");
  //   for (let element2 of words){
  //     let firstChar = element2[0].toUpperCase();
  //     let capitalizedWord = element2.replace(element2[0], firstChar);
  //     titles.push(capitalizedWord); 
  //     titles.join(" ")
  //   }
  // }
  // console.log(titles);
}
titleCased();
