let blackJackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, '11': 11, '12': 12 }
};
const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('swish.mp3');
const removeSound = new Audio('Retrieve.mp3');
const winSound = new Audio('winning.mp3');
const losingSound = new Audio('losing.mp3');
document.querySelector("#blackjack-hit-button").addEventListener('click', blackJackHit);
document.querySelector("#blackjack-stand-button").addEventListener('click',DealerLogic);      
document.querySelector("#blackjack-deal-button").addEventListener('click', blackJackDeal);
//User's Shot
function blackJackHit() {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
}
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = `${card}.jpg`;
    hitSound.play();
    document.querySelector(activePlayer['div']).appendChild(cardImage);

}
//Machine's Shot
function blackJackDeal() {
    let winner = computeWinner();
    showResult(winner);
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector("#dealer-box").querySelectorAll('img');
    for (i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
        removeSound.play();
    }
    for (i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
        removeSound.play();
    }
    YOU['score']=0;
    DEALER['score']=0;
    document.querySelector("#your-blackjack-result").textContent=0;
    document.querySelector("#dealer-blackjack-result").textContent=0;
    document.querySelector("#your-blackjack-result").style.color='#ffffff';
    document.querySelector("#dealer-blackjack-result").style.color='#ffffff';
}
function updateScore(card, activePlayer) {
    activePlayer['score'] += blackJackGame['cards'][card];

}
function showScore(activePlayer) {
    if(activePlayer['score']>=20){
        document.querySelector(activePlayer['scoreSpan']).textContent="BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color="red";
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}
}         
function DealerLogic(){
    let card = randomCard();   
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
}
//Decide who's the winner and return who won
function computeWinner(){
    let winner;
    if(YOU['score']<=20){
//Condition: Higher Score then dealer or if Dealer Busts You will win !
        if(YOU['score']>DEALER['score'] || DEALER['score']>20){
            console.log('You win');
            winner = YOU;
        }else if(YOU['score']<DEALER['score']){
            console.log('You lost !');
            winner = DEALER;
        }else if(YOU['score']===DEALER['score']){
            console.log('You Drew');
        }
//Condition2:When user busts but dealer doesn't

        }else if(YOU['score']>20 && DEALER['score']<=20){
        console.log('You lost');
        winner = DEALER;
//Condition 3 : When both dealer and user busts 

        }else if(YOU['score']>20 && DEALER['score']>20){
        console.log('You Drew');
    }
    console.log('Winner is '+ winner); 
        return winner;
}
// Show Results for the winner 
function showResult(winner) {
    let message,messagecolor;   
    if(winner === YOU){
        message="You win";
        messagecolor = "red";
        winSound.play();
    }else if(winner === DEALER){
        message = "You lost";
        messagecolor = "blue";
        losingSound.play();
    }else{
        message = "You draw";
        messagecolor = "yellow";
    }
    document.querySelector("#blackjack-result").textContent=message;
    document.querySelector("#blackjack-result").style.color=messagecolor;
        

}
