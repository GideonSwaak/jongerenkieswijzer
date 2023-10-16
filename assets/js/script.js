class Carousel {
  constructor(element) {
    this.board = element;
    this.cardNumber = 1;
    this.totalCards = 20;

    this.cardData = [
      {
        number: "1/20",
        memeImage: "/assets/img/memes/mem2.png",
        question:
          "Het bindend studieadvies moet voor alle opleidingen (MBO, HBO, WO) worden afgeschaft",
        readmore: "Lees toelichting.",
      },
      {
        number: "2/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Organisaties moeten verplicht worden om stagevergoeding te betalen",
        readmore: "Lees toelichting.",
      },
      {
        number: "3/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Het minimumloon moet gelden vanaf 18 jaar",
        readmore: "Lees toelichting.",
      },
      {
        number: "4/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "Er moet regelgeving komen voor buy now, pay later diensten",
        readmore: "Lees toelichting.",
      },
      {
        number: "5/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Keti Koti moet een nationale vrije dag worden",
        readmore: "Lees toelichting.",
      },
      {
        number: "6/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "De leeftijdsgrens van 18 jaar in de jeugdzorg moet worden versoepeld",
        readmore: "Lees toelichting.",
      },
      {
        number: "7/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Er moet accijns komen op vapen",
        readmore: "Lees toelichting.",
      },
      {
        number: "8/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "Het openbaar vervoer moet gratis worden",
        readmore: "Lees toelichting.",
      },
      {
        number: "9/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "De landelijke overheid moet zorgen voor meer subsidie voor openbaar streekvervoer",
        readmore: "Lees toelichting.",
      },
      {
        number: "10/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Nederland moet streven om zo snel mogelijk klimaatneutraal te zijn",
        readmore: "Lees toelichting.",
      },
      {
        number: "11/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Stemrecht van jongeren moet verlaagd worden naar 16 jaar",
        readmore: "Lees toelichting.",
      },
      {
        number: "12/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Het eigen risico moet voor jongeren tot en met 23 jaar worden afgeschaft",
        readmore: "Lees toelichting.",
      },
      {
        number: "13/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "De overheid moet meer investeren in sportieve, culturele en artistieke activiteiten voor jongeren",
        readmore: "Lees toelichting.",
      },
      {
        number: "14/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "Er moet een generatietoets komen",
        readmore: "Lees toelichting.",
      },
      {
        number: "15/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "Jongeren die onder het leenstelsel hebben gestudeerd moeten meer worden gecompenseerd voor de opgebouwde studieschuld",
        readmore: "Lees toelichting.",
      },
      {
        number: "16/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Studentenkamers moeten ook in aanmerking kunnen komen voor huurtoeslag",
        readmore: "Lees toelichting.",
      },
      {
        number: "17/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Huurprijzen in de vrije sector moeten worden vastgesteld",
        readmore: "Lees toelichting.",
      },
      {
        number: "18/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Milieuvervuilende bedrijven moeten betalen voor de schade die ze veroorzaken",
        readmore: "Lees toelichting.",
      },
      {
        number: "19/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "Overheidsinstanties mogen etniciteit niet gebruiken om fraude te bestrijden",
        readmore: "Lees toelichting.",
      },
      {
        number: "20/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "De overheid moet een Nationale Jeugdstrategie ontwikkelen",
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

      // Create card-top container
      const cardTop = document.createElement("div");
      cardTop.classList.add("card-top");

      // Create card-label div and set its text content
      const cardLabel = document.createElement("div");
      cardLabel.classList.add("card-label");
      cardLabel.textContent = cardData.number;

      // Create swipe-icon div
      const swipeIcon = document.createElement("div");
      swipeIcon.classList.add("swipe-icon");

      // Create the span element for the material-symbols-outlined
      const materialSpan = document.createElement("span");
      materialSpan.classList.add("material-symbols-outlined");
      materialSpan.textContent = "swipe";

      // Append the span element to the swipe-icon div
      swipeIcon.appendChild(materialSpan);

      // Append cardLabel and swipeIcon to card-top container
      cardTop.appendChild(cardLabel);
      cardTop.appendChild(swipeIcon);

      // Append card-top container to the card
      card.appendChild(cardTop);

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
