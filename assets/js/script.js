// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

// constants
const urls = [
  "https://source.unsplash.com/random/1000x1000/?sky",
  "https://source.unsplash.com/random/1000x1000/?landscape",
  "https://source.unsplash.com/random/1000x1000/?ocean",
  "https://source.unsplash.com/random/1000x1000/?moutain",
  "https://source.unsplash.com/random/1000x1000/?forest",
];

// variables
let swipedCount = 0;
let cards = [];

// functions
function appendNewCard() {
  if (swipedCount === cards.length) {
    // All cards have been swiped, alert and stop
    alert("You've swiped all the cards!");
    return;
  }

  const card = cards[swipedCount];
  swiper.append(card.element);
  swipedCount++;

  // Create a div to store the card number
  const cardNumberDiv = document.createElement("div");
  cardNumberDiv.classList.add("card-number");
  cardNumberDiv.textContent = `Card ${swipedCount + 1}`;

  // Append the card number div to the card element
  card.element.appendChild(cardNumberDiv);

  // Reapply the 3D animation
  card.element.style.transition = "transform 1s";
  const remainingCards = cards.slice(swipedCount); // Cards yet to be swiped
  remainingCards.forEach((card, index) => {
    card.element.style.setProperty("--i", index);
  });
}

// Create 20 cards once
for (let i = 0; i < 20; i++) {
  const card = new Card({
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = "running";
      like.classList.toggle("trigger");
    },
    onDislike: () => {
      dislike.style.animationPlayState = "running";
      dislike.classList.toggle("trigger");
    },
  });
  cards.push(card);
}

// Initialize with the first card
appendNewCard();
