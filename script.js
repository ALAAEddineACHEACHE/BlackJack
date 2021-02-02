let blackJackGame = {
'you': {'scoreSpan': '#your-blackjack-result', 'div' : '#your-box' ,'score' :0 },
'dealer':{'scoreSpan' : '#dealer-blackjack-result' ,'div': '#dealer-box','score':0},
'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'A10':[11,21],'AJ':[11,21],'AK':[11,21]},
};  
const YOU = blackJackGame['you']
const DEALER = blackJackGame['dealer']
const hitSound = new Audio('assets/sounds/1.mp3');
const removeSound = new Audio('assets/sounds/2.mp3'); 
document.querySelector("#blackjack-hit-button").addEventListener('click',blackJackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click',blackJackDeal);
function blackJackHit(){
    showCard(DEALER);
    showCard(YOU);
}

function showCard(activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = `assets/images/2.jpg`;
    hitSound.play();
    document.querySelector(activePlayer['div']).appendChild(cardImage);

}

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
