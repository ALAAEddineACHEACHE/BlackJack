let blackJackGame = {
'you': {'scoreSpan': '#your-blackjack-result', 'div' : '#your-box' ,'score' :0 },
'dealer':{'scoreSpan' : '#dealer-blackjack-result' ,'div': '#dealer-box','score':0},
};  
const YOU = blackJackGame['you']
const DEALER = blackJackGame['dealer']
const hitSound = new Audio('assets/sounds/1.mp3');
document.querySelector("#blackjack-hit-button").addEventListener('click',blackJackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click',blackJackDeal);
function blackJackHit(){
    showCard(YOU);
}
function showCard(activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = 'assets/images/Q.jpg';
    hitSound.play();
    document.querySelector(DEALER['div']).appendChild(cardImage);

}
function blackJackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    console.log(yourImages);
    

}