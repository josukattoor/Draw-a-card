document.addEventListener("DOMContentLoaded", function () {
    const drawCardBtn = document.getElementById("drawCardBtn");
    const cardImageContainer = document.getElementById("cardImage");

    drawCardBtn.addEventListener("click", drawCard);

    function drawCard() {
        // fetch request
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
            .then((response) => response.json())
            .then((data) => {
                // Check if a card was successfully drawn
                if (data.cards.length > 0) {
                    const cardData = data.cards[0];
                    const cardImageUrl = cardData.image;

                    // Create an image element for the card
                    const cardImage = document.createElement("img");
                    cardImage.setAttribute("src", cardImageUrl);

                    // Clear the card image container and append the new card image
                    cardImageContainer.innerHTML = "";
                    cardImageContainer.appendChild(cardImage);
                } else {
                    // Handle the case when no card was drawn
                    cardImageContainer.innerHTML = "No card drawn.";
                }
            })
            .catch((error) => {
                console.error(error);
                cardImageContainer.innerHTML = "An error occurred while drawing the card.";
            });
    }
});
