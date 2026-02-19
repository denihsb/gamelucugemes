const runaway = document.getElementById("runaway");
const options = document.querySelectorAll(".option");
const result = document.getElementById("result");

const magnetButton = [...options].find(btn =>
  btn.innerText.includes("Banyak Banget")
);

// 💔 Runaway logic
runaway.addEventListener("mouseenter", () => {
  runaway.style.position = "absolute";
  runaway.style.top = Math.random() * 80 + "%";
  runaway.style.left = Math.random() * 80 + "%";
});

// 💖 Magnet logic
document.addEventListener("mousemove", (e) => {
  const rect = magnetButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const distX = e.clientX - buttonX;
  const distY = e.clientY - buttonY;

  const distance = Math.sqrt(distX * distX + distY * distY);

  if (distance < 150) {
    magnetButton.style.transform = `translate(${distX * 0.2}px, ${distY * 0.2}px)`;
  } else {
    magnetButton.style.transform = `translate(0,0)`;
  }
});

// ❤️ Klik valid option
options.forEach(button => {
  button.addEventListener("click", () => {
    result.innerText = "Nahhh ini jawaban favorit aku 😌❤️";
    createHearts();
    setTimeout(showFinalLove, 1500);
  });
});

function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

function showFinalLove() {
  const loveScreen = document.createElement("div");
  loveScreen.className = "fullscreen-love";
  loveScreen.innerHTML = `
    <div id="loveText"></div>
  `;
  document.body.appendChild(loveScreen);

  const message = [
    "Aku nggak tau masa depan bakal kayak gimana...",
    "Tapi aku tau satu hal.",
    "Setiap hari bareng kamu...",
    "selalu jadi hari favorit aku.",
    "",
    "Dan aku bersyukur banget punya kamu ❤️"
  ];

  typeMessage(message, 0);
}

function typeMessage(lines, index) {
  if (index >= lines.length) return;

  const container = document.getElementById("loveText");
  const p = document.createElement("p");
  p.style.marginBottom = "15px";
  p.style.opacity = "0";
  container.appendChild(p);

  let charIndex = 0;

  function typeChar() {
    if (charIndex < lines[index].length) {
      p.textContent += lines[index][charIndex];
      charIndex++;
      setTimeout(typeChar, 40);
    } else {
      p.style.opacity = "1";
      setTimeout(() => {
        typeMessage(lines, index + 1);
      }, 700);
    }
  }

  typeChar();
}
    
