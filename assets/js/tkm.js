let skor = 0;

tasBtn.addEventListener("click", tasHamlesi);
kagitBtn.addEventListener("click", kagitHamlesi);
makasBtn.addEventListener("click", makasHamlesi);
const gameContainer = document.querySelector(".game-btns");


function bilgisayarHamlesi() {
  return ["Taş", "Kağıt", "Makas"][Math.floor(Math.random() * 3)];
}
function tryAgain() {
  gameContainer.innerHTML = `<div class="game-btns">
          <a id="kagitBtn" href="#"
            ><img src="assets/img/paper.svg" alt=""
          /></a>
          <a id="makasBtn" href="#"
            ><img src="assets/img/scissors.svg" alt=""
          /></a>
          <a id="tasBtn" href="#"><img src="assets/img/rock.svg" alt="" /></a>
        </div>`;
}

function tasHamlesi() {
  gameContainer.innerHTML = "";
  const hamle = bilgisayarHamlesi();
  if (hamle == "Kağıt") {

    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="tasBtn" href="#"><img src="assets/img/rock.svg" alt="" /></a>
          <a id="kagitBtn" href="#"><img src="assets/img/paper.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>YOU LOSE</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
playAgain.addEventListener("click", tryAgain);

  } else if (hamle == "Makas") {
    skor++;
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="tasBtn" href="#"><img src="assets/img/rock.svg" alt="" /></a>
          <a id="makasBtn" href="#"><img src="assets/img/scissors.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>YOU WIN</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
    playAgain.addEventListener("click", tryAgain);
  } else {
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="tasBtn" href="#"><img src="assets/img/rock.svg" alt="" /></a>
          <a id="tasBtn" href="#"><img src="assets/img/rock.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>DRAW</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
  }
  playAgain.addEventListener("click", tryAgain);
}

function kagitHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Makas") {
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="papperBtn" href="#"><img src="assets/img/paper.svg" alt="" /></a>
          <a id="makasBtn" href="#"><img src="assets/img/scissors.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>YOU LOSE</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
    playAgain.addEventListener("click", tryAgain);
  } else if (hamle == "Taş") {
    skor++;
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="papperBtn" href="#"><img src="assets/img/paper.svg" alt="" /></a>
          <a id="rockBtn" href="#"><img src="assets/img/rock.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>YOU WIN</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
    playAgain.addEventListener("click", tryAgain);
  } else {
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="papperBtn" href="#"><img src="assets/img/paper.svg" alt="" /></a>
          <a id="paperBtn" href="#"><img src="assets/img/paper.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>DRAW</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
  }
  playAgain.addEventListener("click", tryAgain);
}
function makasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle == "Taş") {
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="scissorsBtn" href="#"><img src="assets/img/scissors.svg" alt="" /></a>
          <a id="rockBtn" href="#"><img src="assets/img/rock.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>YOU LOSE</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
    playAgain.addEventListener("click", tryAgain);
  } else if (hamle == "Kağıt") {
    skor++;
    score.innerText = skor;
    gameContainer.innerHTML = `  <div class="choise">
          <a id="scissorsBtn" href="#"><img src="assets/img/scissors.svg" alt="" /></a>
          <a id="paperBtn" href="#"><img src="assets/img/paper.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>YOU WIN</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
    playAgain.addEventListener("click", tryAgain);
  } else {
    score.innerText = skor;
    console.log("berabere");
    gameContainer.innerHTML = `  <div class="choise">
          <a id="scissorsBtn" href="#"><img src="assets/img/scissors.svg" alt="" /></a>
          <a id="scissorsBtn" href="#"><img src="assets/img/scissors.svg" alt=""/></a>
        </div>
        <div class="selects">
            <h3>YOU PICKED</h3>
            <h3>THE HOUSE PICKED</h3>
          </div>
          <div class="result-container">
        <h1>DRAW</h1>
        <button id="playAgain">PLAY AGAIN</button>
      </div>`;
  }
  playAgain.addEventListener("click", tryAgain);
}
