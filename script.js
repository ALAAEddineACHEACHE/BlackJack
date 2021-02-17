let blackJackGame = {
'you': {'scoreSpan': '#your-blackjack-result', 'div' : '#your-box' ,'score' :0 },
'dealer':{'scoreSpan' : '#dealer-blackjack-result' ,'div': '#dealer-box','score':0},
'cardsM':{'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'11':11,'12':12}
};  
const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('assets/sounds/1.mp3');
const removeSound = new Audio('assets/sounds/2.mp3'); 
document.querySelector("#blackjack-hit-button").addEventListener('click',blackJackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click',blackJackDeal);
//User's Shot
function blackJackHit(){
    let card = randomCard();
    console.log(card);
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU,DEALER);
}
function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackJackGame['cardsM'][randomIndex];
}

function showCard(card,activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = `assets/images/${card}.jpg`;
    hitSound.play();
    document.querySelector(activePlayer['div']).appendChild(cardImage);

}
//Machine's Shot
function blackJackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector("#dealer-box").querySelectorAll('img');
    for(i=0;i<yourImages.length;i++){
        yourImages[i].remove();
        removeSound.play();
    }
    for(i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
        removeSound.play();
    }
}
function updateScore(card,activePlayer) {
    activePlayer['score']+=blackJackGame['cards'];
    
}
function showScore(activePlayer) {
    document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
}



    
