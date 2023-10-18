import cardData from "./card-data.js";
class Carousel {
	constructor(element) {
		this.board = element;
		this.cardNumber = 1;
		this.totalCards = 20;
		this.cardData = cardData;
		this.lastAction = "INIT";
		this.lastDirection = "";

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
					this.next();
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

	push(previous = false) {
		document.getElementById("question-number").textContent = this.cardNumber;
		document.getElementById("last-action").textContent = this.lastAction;
		document.getElementById("top-card").textContent = document.querySelector("#board .card:nth-child(2)")?.getAttribute("data-card");
		let secondCard = document.querySelector("#board .card:nth-child(1)");
		if (secondCard) {
			document.getElementById("bottom-card").textContent = secondCard.getAttribute("data-card");
		}
		if (this.cardNumber <= this.totalCards) {
			let cardData = this.cardData[this.cardNumber - 1];
			if (previous) {
				cardData = this.cardData[this.cardNumber - 2];
			} 
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
			previousButton.addEventListener("click", () => {
				this.previous();
			});
			buttonContainer.appendChild(previousButton);

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
			card.setAttribute("data-card", this.cardNumber);
			this.board.insertBefore(card, this.board.firstChild);
			if (previous) {
				this.cardNumber--;
			} else {
				this.cardNumber++;

			}

			if (this.cardNumber > this.totalCards) {
				alert("Laatste kaart");
				return;
			}
		}
	}
	previous() {
		this.board.removeChild(this.topCard);
		console.log(this.lastDirection)
		if (this.lastDirection === "next") {
			this.board.innerHTML = "";
			this.cardNumber -= 2;
			this.push(true);
		}
		this.push(true);
		this.handle();
		this.lastDirection = "previous";
		this.lastAction = "PREVIOUS";
	}

	next() {
		this.board.removeChild(this.topCard);

		if (this.lastDirection === "previous") {
			this.board.innerHTML = "";
			this.cardNumber += 2;
			this.push();
		}
		this.push();
		this.handle();
		this.lastDirection = "next";
		this.lastAction = "NEXT";
	}

	swipeLeft() {
		this.topCard.style.transform =
			"translateX(-200%) translateY(-50%) rotate(0deg)";
		this.nextCard.style.transform =
			"translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

		setTimeout(() => {
			this.next();
		}, 200);
	}

	swipeUp() {
		this.topCard.style.transform =
			"translateX(-50%) translateY(-250%) rotate(0deg)";
		this.nextCard.style.transform =
			"translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

		setTimeout(() => {
			this.next();
		}, 200);
	}

	swipeRight() {
		this.topCard.style.transform =
			"translateX(200%) translateY(-50%) rotate(0deg)";
		this.nextCard.style.transform =
			"translateX(-50%) translateY(-50%) rotate(0deg) scale(0.95)";

		setTimeout(() => {
			this.next();
		}, 200);
	}
}

let board = document.querySelector("#board");

let carousel = new Carousel(board);
