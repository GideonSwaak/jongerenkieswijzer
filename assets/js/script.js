// LikeCarousel (c) 2019 Simone P.M. github.com/simonepm - Licensed MIT

class Carousel {
  constructor(element) {
    this.board = element;
    this.cardNumber = 1; // Initialize card number to 1
    this.totalCards = 20; // Total number of cards you want to display

    // Define an array of unique text for each card, including card numbers
    this.cardData = [
      {
        number: 1,
        memeImage: "assets/img/memes/meme1.jpg",
        question:
          "Why don't scientists trust atoms? Because they make up everything!",
        readmore: "lees toelichting",
      },
      {
        number: 2,
        memeImage: "assets/img/memes/meme2.jpg",
        question: "What do you call a bear with no teeth? A gummy bear!",
        readmore: "lees toelichting",
      },
      {
        number: 3,
        memeImage: "assets/img/memes/meme3.jpg",
        question:
          "Why don't skeletons fight each other? They don't have the guts!",
        readmore: "lees toelichting",
      },
      {
        number: 4,
        memeImage: "assets/img/memes/meme4.jpg",
        question:
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
        readmore: "lees toelichting",
      },
      {
        number: 5,
        memeImage: "assets/img/memes/meme5.jpg",
        question: "How do you organize a space party? You planet!",
        readmore: "lees toelichting",
      },
      {
        number: 6,
        memeImage: "assets/img/memes/meme6.jpg",
        question: "Why did the bicycle fall over? Because it was two-tired!",
        readmore: "lees toelichting",
      },
      {
        number: 7,
        memeImage: "assets/img/memes/meme7.jpg",
        question: "What do you call a fish with no eyes? Fsh!",
        readmore: "lees toelichting",
      },
      {
        number: 8,
        memeImage: "assets/img/memes/meme8.jpg",
        question: "Why don't eggs tell jokes? Because they might crack up!",
        readmore: "lees toelichting",
      },
      {
        number: 9,
        memeImage: "assets/img/memes/meme9.jpg",
        question:
          "What do you call a snowman with a six-pack? An abdominal snowman!",
        readmore: "lees toelichting",
      },
      {
        number: 10,
        memeImage: "assets/img/memes/meme10.jpg",
        question:
          "Why did the tomato turn red? Because it saw the salad dressing!",
        readmore: "lees toelichting",
      },
      {
        number: 11,
        memeImage: "assets/img/memes/meme11.jpg",
        question:
          "How do you catch a squirrel? Climb a tree and act like a nut!",
        readmore: "lees toelichting",
      },
      {
        number: 12,
        memeImage: "assets/img/memes/meme12.jpg",
        question:
          "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        readmore: "lees toelichting",
      },
      {
        number: 13,
        memeImage: "assets/img/memes/meme13.jpg",
        question: "What do you call a bear with no ears? B!",
        readmore: "lees toelichting",
      },
      {
        number: 14,
        memeImage: "assets/img/memes/meme14.jpg",
        question:
          "Why don't skeletons fight each other? They don't have the guts!",
        readmore: "lees toelichting",
      },
      {
        number: 15,
        memeImage: "assets/img/memes/meme15.jpg",
        question: "What do you call a fake noodle? An impasta!",
        readmore: "lees toelichting",
      },
      {
        number: 16,
        memeImage: "assets/img/memes/meme16.jpg",
        question:
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
        readmore: "lees toelichting",
      },
      {
        number: 17,
        memeImage: "assets/img/memes/meme17.jpg",
        question: "How do you organize a space party? You planet!",
        readmore: "lees toelichting",
      },
      {
        number: 18,
        memeImage: "assets/img/memes/meme18.jpg",
        question: "Why did the bicycle fall over? Because it was two-tired!",
        readmore: "lees toelichting",
      },
      {
        number: 19,
        memeImage: "assets/img/memes/meme19.jpg",
        question: "What do you call a fish with no eyes? Fsh!",
        readmore: "lees toelichting",
      },
      {
        number: 20,
        memeImage: "assets/img/memes/meme20.jpg",
        question: "Why don't eggs tell jokes? Because they might crack up!",
        readmore: "lees toelichting",
      },
    ];

    // add first two cards programmatically
    this.push();
    this.push();

    // handle gestures
    this.handle();
  }
  handle() {
    // list all cards
    this.cards = this.board.querySelectorAll(".card");

    // get top card
    this.topCard = this.cards[this.cards.length - 1];

    // get next card
    this.nextCard = this.cards[this.cards.length - 2];

    // if at least one card is present
    if (this.cards.length > 0) {
      // set default top card position and scale
      this.topCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";

      // destroy previous Hammer instance, if present
      if (this.hammer) this.hammer.destroy();

      // listen for tap and pan gestures on the top card
      this.hammer = new Hammer(this.topCard);
      this.hammer.add(new Hammer.Tap());
      this.hammer.add(
        new Hammer.Pan({
          position: Hammer.position_ALL,
          threshold: 0,
        })
      );

      // pass events data to custom callbacks
      this.hammer.on("tap", (e) => {
        this.onTap(e);
      });
      this.hammer.on("pan", (e) => {
        this.onPan(e);
      });
    }
  }

  onPan(e) {
    if (!this.isPanning) {
      this.isPanning = true;

      // remove transition properties
      this.topCard.style.transition = null;
      if (this.nextCard) this.nextCard.style.transition = null;

      // get top card coordinates in pixels
      let style = window.getComputedStyle(this.topCard);
      let mx = style.transform.match(/^matrix\((.+)\)$/);
      this.startPosX = mx ? parseFloat(mx[1].split(", ")[4]) : 0;
      this.startPosY = mx ? parseFloat(mx[1].split(", ")[5]) : 0;

      // get top card bounds
      let bounds = this.topCard.getBoundingClientRect();

      // get finger position on the top card, top (1) or bottom (-1)
      this.isDraggingFrom =
        e.center.y - bounds.top > this.topCard.clientHeight / 2 ? -1 : 1;
    }

    // get new coordinates
    let posX = e.deltaX + this.startPosX;
    let posY = e.deltaY + this.startPosY;

    // get ratio between swiped pixels and the axes
    let propX = e.deltaX / this.board.clientWidth;
    let propY = e.deltaY / this.board.clientHeight;

    // get swipe direction, left (-1) or right (1)
    let dirX = e.deltaX < 0 ? -1 : 1;

    // get degrees of rotation, between 0 and +/- 45
    let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;

    // get scale ratio, between .95 and 1
    let scale = (95 + 5 * Math.abs(propX)) / 100;

    // move and rotate the top card
    this.topCard.style.transform =
      "translateX(" +
      posX +
      "px) translateY(" +
      posY +
      "px) rotate(" +
      deg +
      "deg) rotateY(0deg) scale(1)";

    // scale up the next card
    if (this.nextCard)
      this.nextCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(" +
        scale +
        ")";

    if (e.isFinal) {
      this.isPanning = false;

      let successful = false;

      // set back transition properties
      this.topCard.style.transition = "transform 200ms ease-out";
      if (this.nextCard)
        this.nextCard.style.transition = "transform 100ms linear";

      // check threshold and movement direction
      if (propX > 0.1 && e.direction == Hammer.DIRECTION_RIGHT) {
        successful = true;
        // get right border position
        posX = this.board.clientWidth;
      } else if (propX < -0 && e.direction == Hammer.DIRECTION_LEFT) {
        successful = true;
        // get left border position
        posX = -(this.board.clientWidth + this.topCard.clientWidth);
      } else if (propY < -0.1 && e.direction == Hammer.DIRECTION_UP) {
        successful = true;
        // get top border position
        posY = -(this.board.clientHeight + this.topCard.clientHeight);
      }

      if (successful) {
        // throw the card in the chosen direction
        this.topCard.style.transform =
          "translateX(" +
          posX +
          "px) translateY(" +
          posY +
          "px) rotate(" +
          deg +
          "deg)";

        // wait for transition end
        setTimeout(() => {
          // remove the swiped card
          this.board.removeChild(this.topCard);
          // add a new card
          this.push();
          // handle gestures on the new top card
          this.handle();
        }, 200);
      } else {
        // reset cards' position and size
        // reset cards' position and size
        this.topCard.style.transform =
          "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";
        if (this.nextCard)
          this.nextCard.style.transform =
            "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)";
      }
    }
  }

  push() {
    if (this.cardNumber <= this.totalCards) {
      let cardData = this.cardData[this.cardNumber - 1];

      let card = document.createElement("div");
      card.classList.add("card");

      // Add a label with the card number
      const cardLabel = document.createElement("div");
      cardLabel.classList.add("card-label");
      cardLabel.textContent = cardData.number;
      card.appendChild(cardLabel);

      // Create an img element for the meme image
      let memeImg = document.createElement("img");
      memeImg.src = `/assets/img/memes/meme${cardData.number}.jpg`; // Assuming the image filenames follow this pattern
      card.appendChild(memeImg);
      memeImg.classList.add("meme-img");

      // Add unique text (question and readmore link) to the card
      const cardTextDiv = document.createElement("div");
      cardTextDiv.classList.add("stelling-vraag");
      cardTextDiv.textContent = cardData.question;
      const readmoreLink = document.createElement("a");
      readmoreLink.href = "#"; // Replace with the actual link
      readmoreLink.textContent = cardData.readmore;
      cardTextDiv.appendChild(readmoreLink);
      card.appendChild(cardTextDiv);

      // Create a container div for the buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("card-button-container");

      // Create the first button (thumbs-down)
      const thumbsDownButton = document.createElement("button");
      thumbsDownButton.innerHTML = '<i class="fa-regular fa-thumbs-down"></i>';
      thumbsDownButton.addEventListener("click", () => {
        this.swipeLeft();
      });
      buttonContainer.appendChild(thumbsDownButton);

      // Create the second button (face-meh)
      const faceMehButton = document.createElement("button");
      faceMehButton.innerHTML = '<i class="fa-regular fa-face-meh"></i>';
      faceMehButton.addEventListener("click", () => {
        this.swipeUp();
      });
      buttonContainer.appendChild(faceMehButton);

      // Create the third button (thumbs-up)
      const thumbsUpButton = document.createElement("button");
      thumbsUpButton.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
      thumbsUpButton.addEventListener("click", () => {
        this.swipeRight();
      });
      buttonContainer.appendChild(thumbsUpButton);

      card.appendChild(buttonContainer);

      this.board.insertBefore(card, this.board.firstChild);

      this.cardNumber++;

      if (this.cardNumber > this.totalCards) {
        alert("Last card reached!");
        return;
      }
    }
  }

  // Function to swipe the top card to the left or simulate a swipe left
  swipeLeft() {
    // Simulate a left swipe by triggering the necessary transformations
    this.topCard.style.transform =
      "translateX(-200%) translateY(-50%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    // Wait for the transition to complete before removing the card and adding a new one
    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }

  // Function to swipe the top card to the top
  // Function to swipe the top card to the top or simulate a swipe up
  swipeUp() {
    // Simulate an up swipe by triggering the necessary transformations
    this.topCard.style.transform =
      "translateX(-50%) translateY(-250%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    // Wait for the transition to complete before removing the card and adding a new one
    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }

  // Function to swipe the top card to the right
  swipeRight() {
    // Simulate a right swipe by triggering the necessary transformations
    this.topCard.style.transform =
      "translateX(200%) translateY(-50%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    // Wait for the transition to complete before removing the card and adding a new one
    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }
}

let board = document.querySelector("#board");

let carousel = new Carousel(board);
