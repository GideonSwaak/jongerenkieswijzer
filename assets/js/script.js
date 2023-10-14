class Carousel {
  constructor(element) {
    this.board = element;
    this.cardNumber = 1;
    this.totalCards = 20;

    this.cardData = [
      {
        number: "Stelling 1",
        memeImage: "/assets/img/memes/meme1.png",
        question:
          "Het bindend studieadvies moet voor alle opleidingen (MBO, HBO, WO) worden afgeschaft.",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 2",
        memeImage: "assets/img/memes/meme2.jpg",
        question: "What do you call a bear with no teeth? A gummy bear!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 3",
        memeImage: "assets/img/memes/meme3.jpg",
        question:
          "Why don't skeletons fight each other? They don't have the guts!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 4",
        memeImage: "assets/img/memes/meme4.jpg",
        question:
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 5",
        memeImage: "assets/img/memes/meme5.jpg",
        question: "How do you organize a space party? You planet!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 6",
        memeImage: "assets/img/memes/meme6.jpg",
        question: "Why did the bicycle fall over? Because it was two-tired!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 7",
        memeImage: "assets/img/memes/meme7.jpg",
        question: "What do you call a fish with no eyes? Fsh!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 8",
        memeImage: "assets/img/memes/meme8.jpg",
        question: "Why don't eggs tell jokes? Because they might crack up!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 9",
        memeImage: "assets/img/memes/meme9.jpg",
        question:
          "What do you call a snowman with a six-pack? An abdominal snowman!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 10",
        memeImage: "assets/img/memes/meme10.jpg",
        question:
          "Why did the tomato turn red? Because it saw the salad dressing!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 11",
        memeImage: "assets/img/memes/meme11.jpg",
        question:
          "How do you catch a squirrel? Climb a tree and act like a nut!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 12",
        memeImage: "assets/img/memes/meme12.jpg",
        question:
          "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 13",
        memeImage: "assets/img/memes/meme13.jpg",
        question: "What do you call a bear with no ears? B!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 14",
        memeImage: "assets/img/memes/meme14.jpg",
        question:
          "Why don't skeletons fight each other? They don't have the guts!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 15",
        memeImage: "assets/img/memes/meme15.jpg",
        question: "What do you call a fake noodle? An impasta!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 16",
        memeImage: "assets/img/memes/meme16.jpg",
        question:
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 17",
        memeImage: "assets/img/memes/meme17.jpg",
        question: "How do you organize a space party? You planet!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 18",
        memeImage: "assets/img/memes/meme18.jpg",
        question: "Why did the bicycle fall over? Because it was two-tired!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 19",
        memeImage: "assets/img/memes/meme19.jpg",
        question: "What do you call a fish with no eyes? Fsh!",
        readmore: "Lees toelichting.",
      },
      {
        number: "Stelling 20",
        memeImage: "assets/img/memes/meme20.jpg",
        question: "Why don't eggs tell jokes? Because they might crack up!",
        readmore: "Lees toelichting.",
      },
    ];

    this.push();
    this.push();
    this.handle();
  }
  handle() {
    this.cards = this.board.querySelectorAll(".card");
    this.topCard = this.cards[this.cards.length - 1];
    this.nextCard = this.cards[this.cards.length - 2];

    if (this.cards.length > 0) {
      this.topCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";

      if (this.hammer) this.hammer.destroy();

      this.hammer = new Hammer(this.topCard);
      this.hammer.add(new Hammer.Tap());
      this.hammer.add(
        new Hammer.Pan({
          position: Hammer.position_ALL,
          threshold: 0,
        })
      );

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
      this.topCard.style.transition = null;
      if (this.nextCard) this.nextCard.style.transition = null;

      let style = window.getComputedStyle(this.topCard);
      let mx = style.transform.match(/^matrix\((.+)\)$/);
      this.startPosX = mx ? parseFloat(mx[1].split(", ")[4]) : 0;
      this.startPosY = mx ? parseFloat(mx[1].split(", ")[5]) : 0;
      let bounds = this.topCard.getBoundingClientRect();
      this.isDraggingFrom =
        e.center.y - bounds.top > this.topCard.clientHeight / 2 ? -1 : 1;
    }

    let posX = e.deltaX + this.startPosX;
    let posY = e.deltaY + this.startPosY;
    let propX = e.deltaX / this.board.clientWidth;
    let propY = e.deltaY / this.board.clientHeight;
    let dirX = e.deltaX < 0 ? -1 : 1;
    let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;
    let scale = (95 + 5 * Math.abs(propX)) / 100;

    this.topCard.style.transform =
      "translateX(" +
      posX +
      "px) translateY(" +
      posY +
      "px) rotate(" +
      deg +
      "deg) rotateY(0deg) scale(1)";

    if (this.nextCard)
      this.nextCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(" +
        scale +
        ")";

    if (e.isFinal) {
      this.isPanning = false;
      let successful = false;
      this.topCard.style.transition = "transform 200ms ease-out";
      if (this.nextCard)
        this.nextCard.style.transition = "transform 100ms linear";

      if (propX > 0.1 && e.direction == Hammer.DIRECTION_RIGHT) {
        successful = true;
        posX = this.board.clientWidth;
      } else if (propX < -0 && e.direction == Hammer.DIRECTION_LEFT) {
        successful = true;
        posX = -(this.board.clientWidth + this.topCard.clientWidth);
      } else if (propY < -0.1 && e.direction == Hammer.DIRECTION_UP) {
        successful = true;
        posY = -(this.board.clientHeight + this.topCard.clientHeight);
      }

      if (successful) {
        this.topCard.style.transform =
          "translateX(" +
          posX +
          "px) translateY(" +
          posY +
          "px) rotate(" +
          deg +
          "deg)";
        setTimeout(() => {
          this.board.removeChild(this.topCard);
          this.push();
          this.handle();
        }, 200);
      } else {
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

      const cardLabel = document.createElement("div");
      cardLabel.classList.add("card-label");
      cardLabel.textContent = cardData.number;
      card.appendChild(cardLabel);

      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");
      let memeImg = document.createElement("img");
      memeImg.src = cardData.memeImage;
      imageWrapper.appendChild(memeImg);

      card.appendChild(imageWrapper);
      memeImg.classList.add("meme-img");

      const stellingVraagDiv = document.createElement("div");
      stellingVraagDiv.classList.add("stelling-vraag");
      stellingVraagDiv.textContent = cardData.question;
      card.appendChild(stellingVraagDiv);

      const readmoreDiv = document.createElement("div");
      readmoreDiv.classList.add("readmore-link");
      const readmoreLink = document.createElement("a");
      readmoreLink.href = "#";
      readmoreLink.textContent = cardData.readmore;
      readmoreDiv.appendChild(readmoreLink);
      const hrElement = document.createElement("hr");
      readmoreDiv.appendChild(hrElement);
      card.appendChild(readmoreDiv);

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("card-button-container");

      const thumbsDownButton = document.createElement("button");
      thumbsDownButton.innerHTML = '<i class="fa-regular fa-thumbs-down"></i>';
      thumbsDownButton.addEventListener("click", () => {
        this.swipeLeft();
      });
      buttonContainer.appendChild(thumbsDownButton);

      const faceMehButton = document.createElement("button");
      faceMehButton.innerHTML = '<i class="fa-regular fa-face-meh"></i>';
      faceMehButton.addEventListener("click", () => {
        this.swipeUp();
      });
      buttonContainer.appendChild(faceMehButton);

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

  swipeLeft() {
    this.topCard.style.transform =
      "translateX(-200%) translateY(-50%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }

  swipeUp() {
    this.topCard.style.transform =
      "translateX(-50%) translateY(-250%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }

  swipeRight() {
    this.topCard.style.transform =
      "translateX(200%) translateY(-50%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }
}

let board = document.querySelector("#board");

let carousel = new Carousel(board);
