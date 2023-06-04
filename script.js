//Database
  let blackjackGame={
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards' :['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
  }

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

//Sound 
const hitSound= new Audio ('/sounds/swish.m4a');


//Query Selector
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackHit() {
let card=randomCard();
//console.log(card);
showcard(YOU,card);
//showcard(DEALER,card);
updateScore(card,YOU);
showScore(YOU);
console.log(YOU['score']);
}

function randomCard(){
let randomIndex=Math.floor(Math.random()*13);
return blackjackGame['cards'][randomIndex];
}

function showcard(activePlayer,card){
let cardImage=document.createElement('img');
cardImage.src=`/images/${card}.png`;
document.querySelector(activePlayer['div']).appendChild(cardImage);
hitSound.play();
}


function blackjackDeal(){
let yourImages=document.querySelector('#your-box').querySelectorAll('img');
let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');

for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
    
}
for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();   
}

}

function updateScore(card,activePlayer){
    activePlayer['score']+= blackjackGame['cardsmap'][card];
}

function showScore(activePlayer){
document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}