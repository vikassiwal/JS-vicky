# projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 4


```javaScript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess  =parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess<1){
    alert('please enter a valid number')
  }
  else if(guess>100){
    alert('please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over .Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`you guessed it right`)
    endGame()
  }else if(guess<randomNumber){
    displayMessage(`number is too low`)
  }
  else if(guess>randomNumber){
    displayMessage(`number is too high`)
  }
}

function displayGuess(guess){ //displayguess->cleanUpGuess
  userInput.value=''
  guessSlot.innerHTML+=`${guess}, `
  numGuess++
  remaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
  lowOrhigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
  startOver.appendChild(p)
  newGame()
  playGame=false
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random() * 100 + 1);
    
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML = `${10-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true;

  })
 
}

```

## project 5
``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
      <table border="1" style="color:white;">
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key===" "? "space":e.key}</td>
          <td>${e.keyCode}</td>a
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});


```

## project 6 
``` javascript
//generate a random color
const randomColor = function(){
  const hex="0123456789ABCDEF"
  let color = '#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)] 
  }
  return color
};
let intervalId;
const startChangingColor=function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor=randomColor()
  }
}
const stopChangingColor=function(){
  clearInterval(intervalId)
  intervalId=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)

```