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
        toelichting:
          "Het bindend studie advies (BSA) bepaalt het minimumaantal studiepunten dat moet worden gehaald voor eerstejaars studenten. Nu kunnen studenten van de opleiding worden gestuurd bij onvoldoende studiepunten. Als het advies niet meer bindend is, ligt de keuze om door te gaan met een studie bij de student.",
      },
      {
        number: "2/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Organisaties moeten verplicht worden om stagevergoeding te betalen",
        readmore: "Lees toelichting.",
        toelichting:
          "Studenten krijgen op dit moment niet altijd betaald voor hun stage, omdat werkgevers wettelijk niet verplicht zijn om een stagevergoeding te geven.",
      },
      {
        number: "3/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Het minimumloon moet gelden vanaf 18 jaar",
        readmore: "Lees toelichting.",
        toelichting:
          "Voor de wet ben je vanaf je 18e volwassen. Toch heb je pas recht op het minimumloon vanaf 21 jaar. Hier wordt al jarenlang over gediscussieerd. Op dit moment is het wettelijk mogelijk om jongeren tot hun 21ste onder het minimumloon te laten werken.",
      },
      {
        number: "4/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "Er moet regelgeving komen voor buy now, pay later diensten",
        readmore: "Lees toelichting.",
        toelichting:
          "Veel webwinkels bieden de mogelijkheid om aankopen later in één keer of in drie termijnen te betalen (buy now, pay later). Dit lijkt relaxt maar door het gebrek aan informatie krijgen veel mensen onnodige boetes doordat ze te laat betalen waardoor schulden snel oplopen.",
      },
      {
        number: "5/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Keti Koti moet een nationale vrije dag worden",
        readmore: "Lees toelichting.",
        toelichting:
          "Op 1 juli is het Keti Koti/Dia di Abolishon. Dit is de dag dat de afschaffing van de slavernij in 1863 in Suriname en de voormalig Nederlandse Antillen wordt herdacht en de vrijheid wordt gevierd.",
      },
      {
        number: "6/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "De leeftijdsgrens van 18 jaar in de jeugdzorg moet worden versoepeld",
        readmore: "Lees toelichting.",
        toelichting:
          "In de Jeugdwet staat dat jongeren tot 18 jaar jeugdhulp kunnen krijgen. Jeugdzorg bij uithuisgeplaatste kinderen houdt nu op als een kind 18 jaar wordt. Versoepeling zorgt voor passende zorg en begeleiding in plaats van een kunstmatige breuk. De leeftijdsgrens voor pleegzorg is al opgerekt naar 21 jaar.",
      },
      {
        number: "7/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Er moet accijns komen op vapen",
        readmore: "Lees toelichting.",
        toelichting:
          "Op dit moment worden e-sigaretten nog anders behandeld dan tabak. Zo is het op meer plekken toegestaan om e-sigaretten te roken (vapen) en zijn deze goedkoper dan tabak omdat er geen verbruiksbelasting (accijns) op zit.",
      },
      {
        number: "8/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "Het openbaar vervoer moet gratis worden",
        readmore: "Lees toelichting.",
        toelichting:
          "Het Nederlandse openbaar vervoer hoort bij de duurste ter wereld. In Nederland dekken subsidies ongeveer de helft van de kosten van het openbaarvervoer. De overige kosten betalen reizigers zelf.",
      },
      {
        number: "9/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "De landelijke overheid moet zorgen voor meer subsidie voor openbaar streekvervoer",
        readmore: "Lees toelichting.",
        toelichting:
          "Aanbieders van streekvervoer zoals bussen, trams en metro’s hebben in sommige regio’s moeite om het vervoer te bieden. Het netwerk aan vervoer hangt voor een groot deel af van subsidies.",
      },
      {
        number: "10/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Nederland moet streven om zo snel mogelijk klimaatneutraal te zijn",
        readmore: "Lees toelichting.",
        toelichting:
          "In het klimaatakkoord van Parijs staat dat we in 2030 een CO2-reductie van 55% moeten behalen ten opzichte van 1990. Het doel is om in 2050 klimaatneutraal te zijn. Sommige partijen vinden dit niet haalbaar, terwijl andere partijen vinden dat Nederland dit doel al eerder moet bereiken.",
      },
      {
        number: "11/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Stemrecht van jongeren moet verlaagd worden naar 16 jaar",
        readmore: "Lees toelichting.",
        toelichting:
          "Jongeren kunnen pas vanaf 18 jaar stemmen, door de wet aan te passen kunnen jongeren al vanaf 16 jaar gaan stemmen.",
      },
      {
        number: "12/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Het eigen risico moet voor jongeren tot en met 23 jaar worden afgeschaft",
        readmore: "Lees toelichting.",
        toelichting:
          "Het verplichte eigen risico geldt voor iedereen van 18 jaar of ouder met een Nederlandse zorgverzekering. Jongeren onder de 18 jaar zijn gratis meeverzekerd bij één van de ouders. Zij hoeven geen eigen risico te betalen wanneer zij gebruik maken van zorg uit het basispakket.",
      },
      {
        number: "13/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "De overheid moet meer investeren in sportieve, culturele en artistieke activiteiten voor jongeren",
        readmore: "Lees toelichting.",
        toelichting:
          "De overheid moet ervoor zorgen dat elke jongere gelijke kansen heeft om deel te nemen aan recreatieve, artistieke en culturele voorzieningen.",
      },
      {
        number: "14/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "Er moet een generatietoets komen",
        readmore: "Lees toelichting.",
        toelichting:
          "Jongeren onder de 18 en toekomstige generaties hebben geen stem in de politiek. Er moet een generatietoets komen bij nieuwe wetgeving, die duidelijk maakt wat de impact is op huidige en toekomstige generaties jongeren.",
      },
      {
        number: "15/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "Jongeren die onder het leenstelsel hebben gestudeerd moeten meer worden gecompenseerd voor de opgebouwde studieschuld",
        readmore: "Lees toelichting.",
        toelichting:
          "Studenten die hebben gestudeerd onder het leenstelsel hebben geen basisbeurs gehad. Er is nu een tegemoetkoming van € 29,92 per maand alleen voor de officiële duur van de studie, waarvoor studenten hun diploma hebben behaald. Terwijl zij anders 3x zoveel aan basisbeurs hadden ontvangen.",
      },
      {
        number: "16/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Studentenkamers moeten ook in aanmerking kunnen komen voor huurtoeslag",
        readmore: "Lees toelichting.",
        toelichting:
          "Huurtoeslag is een bijdrage van de overheid in de huurkosten, waarbij een van de voorwaarden is dat je een zelfstandige woonruimte hebt. Wie de keuken, badkamer of voordeur deelt, valt buiten de boot. Studentenkamers zijn vaak geen zelfstandige woningen waardoor studenten nu vaak niet in aanmerking komen voor huurtoeslag.",
      },
      {
        number: "17/20",
        memeImage: "assets/img/memes/mem2.png",
        question: "Huurprijzen in de vrije sector moeten worden vastgesteld",
        readmore: "Lees toelichting.",
        toelichting:
          "Veel jongeren huren in de vrije huursector omdat ze nog te weinig vermogen hebben om een huis te kopen en niet terecht kunnen in de sociale sector door de lange wachttijden. Door de prijzen in de vrije sector te reguleren kan de middenhuur goedkoper worden voor jongeren.",
      },
      {
        number: "18/20",
        memeImage: "assets/img/memes/mem1.png",
        question:
          "Milieuvervuilende bedrijven moeten betalen voor de schade die ze veroorzaken",
        readmore: "Lees toelichting.",
        toelichting:
          "Consumenten draaien nu voornamelijk op voor de kosten via belastingen, terwijl de meeste milieuschade in Nederland plaatsvindt door bedrijven, vooral bij de verwerking van grondstoffen tot materialen en halffabricaten.",
      },
      {
        number: "19/20",
        memeImage: "assets/img/memes/mem2.png",
        question:
          "Overheidsinstanties mogen etniciteit niet gebruiken om fraude te bestrijden",
        readmore: "Lees toelichting.",
        toelichting:
          "Naar aanleiding van het toeslagenschandaal gaat het hier steeds vaker over, maar deze discussie speelt bijvoorbeeld ook bij de politie en DUO. Er wordt dan gesproken over etnisch profileren. Nationaliteit, afkomst of huidskleur zijn dan onderdeel van een risicoprofiel waardoor mensen gecontroleerd worden vanwege die kenmerken in plaats van gedrag.",
      },
      {
        number: "20/20",
        memeImage: "assets/img/memes/mem1.png",
        question: "De overheid moet een Nationale Jeugdstrategie ontwikkelen",
        readmore: "Lees toelichting.",
        toelichting:
          "Een Nationale Jeugdstrategie is een actieplan voor de overheid met concrete doelen en acties die nodig zijn voor een goede toekomst van jongeren. Deze doelen worden door jongeren samen met beleidsmakers opgesteld, om zo landelijk beleid te maken dat uitgaat van de behoeftes van jongeren en zorgt dat de grote problemen waar zij tegenaan lopen in samenhang worden aangepakt.",
      },
    ];

    this.swipedCards = [];
    this.push();
    this.push();
    this.handle();
  }

  isClickingReadmore(e) {
    const target = e.target;
    if (
      target.classList.contains("readmore-link") ||
      target.parentElement.classList.contains("readmore-link")
    ) {
      return true;
    }
    return false;
  }
  handle() {
    this.cards = this.board.querySelectorAll(".card");
    this.topCard = this.cards[this.cards.length - 1];
    this.nextCard = this.cards[this.cards.length - 2];

    this.topCard.addEventListener("click", (e) => {
      if (this.isClickingReadmore(e)) {
        e.preventDefault();
        const modalId = e.target.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = "block";
        }
      }
    });

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
        if (!this.isClickingReadmore(e)) {
          this.onTap(e);
        }
      });
      this.hammer.on("pan", (e) => {
        this.onPan(e);
      });
    }
  }

  onTap(e) {
    console.log("Tap event detected");
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

      let modalContainer = document.querySelector("#modal-container");
      if (!modalContainer) {
        modalContainer = document.createElement("div");
        modalContainer.id = "modal-container";
        document.body.appendChild(modalContainer);
      }

      const modal = document.createElement("div");
      modal.classList.add("card-modal");
      modal.id = `modal-${this.cardNumber}`;
      modal.style.display = "none";
      modal.innerHTML = `
        <div class="card-modal-content">
          <span class="card-modal-close-button" data-modal="modal-${this.cardNumber}">&times;</span>
          <p class="modal-text">${cardData.toelichting}</p>
        </div>
      `;

      const closeButtons = modal.getElementsByClassName(
        "card-modal-close-button"
      );
      for (const closeButton of closeButtons) {
        closeButton.addEventListener("click", () => {
          const modalId = closeButton.getAttribute("data-modal");
          const modal = document.getElementById(modalId);
          if (modal) {
            modal.style.display = "none";
          }
        });
      }

      modalContainer.appendChild(modal);

      const cardTop = document.createElement("div");
      cardTop.classList.add("card-top");

      const cardLabel = document.createElement("div");
      cardLabel.classList.add("card-label");
      cardLabel.textContent = cardData.number;

      const shareIcon = document.createElement("div");
      shareIcon.classList.add("share-icon");

      const materialSpan = document.createElement("span");
      materialSpan.classList.add("material-symbols-outlined");
      materialSpan.textContent = "send";

      shareIcon.appendChild(materialSpan);

      cardTop.appendChild(cardLabel);
      cardTop.appendChild(shareIcon);

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
      if (this.cardNumber === 15) {
        stellingVraagDiv.classList.add("lange-stelling-vraag");
      }
      stellingVraagDiv.textContent = cardData.question;
      card.appendChild(stellingVraagDiv);

      const readmoreDiv = document.createElement("div");
      readmoreDiv.classList.add("readmore-link");
      const readmoreLink = document.createElement("a");
      readmoreLink.href = "#";
      readmoreLink.textContent = cardData.readmore;
      readmoreLink.setAttribute("data-modal", `modal-${this.cardNumber}`);

      readmoreLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("ff");
      });
      readmoreDiv.appendChild(readmoreLink);
      card.appendChild(readmoreDiv);

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("card-button-container");

      const previousButton = document.createElement("button");
      previousButton.classList.add("previous-button");
      previousButton.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
      buttonContainer.appendChild(previousButton);

      previousButton.addEventListener("click", () => {
        this.pop();
      });

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

      const nextButton = document.createElement("button");
      nextButton.classList.add("next-button");
      nextButton.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
      buttonContainer.appendChild(nextButton);

      card.appendChild(buttonContainer);

      this.board.insertBefore(card, this.board.firstChild);
      this.cardNumber++;

      if (this.cardNumber > this.totalCards) {
        alert("Laatste kaart");
        return;
      }
    }
  }

  pop() {
    if (this.swipedCards.length > 0) {
      const { card, direction } = this.swipedCards.pop();
      if (direction === "left") {
        this.board.insertBefore(card, this.board.firstChild);
        this.cardNumber--;
      } else if (direction === "up") {
        this.board.insertBefore(card, this.board.firstChild);
        this.cardNumber--;
      } else if (direction === "right") {
        this.topCard.style.transform =
          "translateX(200%) translateY(-50%) rotate(0deg)";
        this.nextCard.style.transform =
          "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";
        this.board.insertBefore(card, this.topCard);
        setTimeout(() => {
          this.board.removeChild(this.topCard);
          this.push();
          this.handle();
        }, 200);
      }
    }
  }
  swipeLeft() {
    this.topCard.style.transform =
      "translateX(-200%) translateY(-50%) rotate(0deg)";
    this.nextCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

    this.swipedCards.push({ card: this.topCard, direction: "left" });

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

    this.swipedCards.push({ card: this.topCard, direction: "up" });

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

    this.swipedCards.push({ card: this.topCard, direction: "right" });

    setTimeout(() => {
      this.board.removeChild(this.topCard);
      this.push();
      this.handle();
    }, 200);
  }
}

let board = document.querySelector("#board");

let carousel = new Carousel(board);
