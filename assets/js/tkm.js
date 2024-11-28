let skor = 0;
const gameContainer = document.querySelector(".game-btns");

const hamleler = {
  Taş: "rock.svg",
  Kağıt: "paper.svg",
  Makas: "scissors.svg",
};

function bilgisayarHamlesi() {
  const choices = ["Taş", "Kağıt", "Makas"];
  return choices[Math.floor(Math.random() * 3)];
}

function oyunSonucu(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "DRAW";
  if (
    (playerChoice === "Taş" && computerChoice === "Makas") ||
    (playerChoice === "Kağıt" && computerChoice === "Taş") ||
    (playerChoice === "Makas" && computerChoice === "Kağıt")
  ) {
    skor++;
    score.innerText = skor;
    return "YOU WIN";
  }
  return "YOU LOSE";
}

function oyunBaslat(playerChoice) {
  const computerChoice = bilgisayarHamlesi();
  const result = oyunSonucu(playerChoice, computerChoice);

  gameContainer.innerHTML = `
    <div class="choise">
      <a href="#"><img src="assets/img/${hamleler[playerChoice]}" alt="" /></a>
      <a href="#"><img src="assets/img/${hamleler[computerChoice]}" alt="" /></a>
    </div>
    <div class="selects">
      <h3>YOU PICKED</h3>
      <h3>THE HOUSE PICKED</h3>
    </div>
    <div class="result-container">
      <h1>${result}</h1>
      <button id="playAgain">PLAY AGAIN</button>
    </div>
  `;

  playAgain.addEventListener("click", oyunuSifirla);
}

function oyunuSifirla() {
  gameContainer.innerHTML = `
    <a id="kagitBtn" href="#"><img src="assets/img/paper.svg" alt=""/></a>
    <a id="makasBtn" href="#"><img src="assets/img/scissors.svg" alt=""/></a>
    <a id="tasBtn" href="#"><img src="assets/img/rock.svg" alt="" /></a>
  `;
  kagitBtn.addEventListener("click", () => oyunBaslat("Kağıt"));
  makasBtn.addEventListener("click", () => oyunBaslat("Makas"));
  tasBtn.addEventListener("click", () => oyunBaslat("Taş"));
}

oyunuSifirla();
