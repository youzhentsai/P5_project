var dictionary = ["codebase", "software", "website", "development", "algorithm", "apprenticeship", "compiler", "database", "framework", "inheritance", "javascript", "linux"]
// dictionary must be all lower case
var allowGuess = 10
var questionEl = document.getElementById('question')
var guessedChar = []
// var isUnique = true

function getRandom() {
  return Math.random();
}

function getQuestion(){
    return dictionary[Math.floor(getRandom() * dictionary.length)]
}

// generate DOM element to display on HTML file
var generateDOM = function(q){
     // clear tags for further display
    questionEl.innerHTML = '';
    q.split('').forEach(function(letter){
      const letterEl = document.createElement('span');
      var isGuessed = guessedChar.includes(letter)

      if(isGuessed){
        letterEl.textContent = letter
      }else{
        letterEl.textContent = '_ '
      }
      document.getElementById('question').appendChild(letterEl)
      document.getElementById('number').innerHTML = allowGuess
    });
    // if (win(isGuessed)) {
    //   alert('You won!')
    // }
    if (result(allowGuess)) {
      alert('You ran out of guesses!')
    }
}
// fucntion that reacts to RESET button
var processGuess = (e)=>{
  guessedChar = []
  question = getQuestion()
  generateDOM(question)
}

var result = function result(allowGuess) {
  return (allowGuess===0)? true:false
}

// var winning = function win(isGuessed){
//   return(letterEl===isGuessed)? true:false
// }
// initial guess. generated from random selection
var question = getQuestion()
generateDOM(question)

// console.log(question)
window.addEventListener('keypress', function(e){
  // document the pressed key
  if(question.includes(e.key) && !guessedChar.includes(e.key)){
    guessedChar.push(e.key) // this is an expedient since there's currently no LocalStorage feature
    // console.log(guessedChar)
  }else{
    allowGuess--
  }
  generateDOM(question)
})

document.getElementById('reset').addEventListener('click', processGuess)
