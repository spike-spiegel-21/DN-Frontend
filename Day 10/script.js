
const cards = document.getElementsByClassName("cards");

var hasAnyCardBeenFlippedToMatch = false;
var firstCard;
var secondCard;

var lockBoard = false;
function flipCard() {
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.toggle("flip");
    if (!hasAnyCardBeenFlippedToMatch) {
        hasAnyCardBeenFlippedToMatch = true;
        firstCard = this;
    } else {
        secondCard = this; 
        checkForMatch();
    }
}

function checkForMatch() {
    let firstCardType = firstCard.getAttribute("data-foodType");
    let secondCardType = secondCard.getAttribute("data-foodType");
    firstCardType === secondCardType ? disableClick() : unflipCards();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
}

function disableClick() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    [hasAnyCardBeenFlippedToMatch, lockBoard] = [false, false];
}

function shuffleCards() {
    [...cards].forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}
shuffleCards();

[...cards].forEach((element) => {
    element.addEventListener("click", flipCard);
});

document.getElementById("resetGame").addEventListener("click", () => {
    [...cards].forEach((element) => {
        element.classList.remove("flip");
    });
    setTimeout(shuffleCards, 500);
    [...cards].forEach((element) => {
        element.addEventListener("click", flipCard);
    });
});