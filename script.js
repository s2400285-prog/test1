function createDate() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    name = "MY LOVE";
  }

  document.getElementById("girlName").textContent = name.toUpperCase();

  document.getElementById("startCard").style.display = "none";

  document.getElementById("letterCard").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function sayYes() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    name = "MY LOVE";
  }

  document.getElementById("letterCard").style.display = "none";

  document.getElementById("successCard").style.display = "block";

  document.getElementById("successName").textContent =
    name.toUpperCase() + " SAID YES! 💕";

  createManyHearts();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function moveNoButton() {
  const button = document.getElementById("noButton");

  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 100;

  const randomX = Math.floor(Math.random() * maxX) - maxX / 2;

  const randomY = Math.floor(Math.random() * maxY) - maxY / 2;

  button.style.position = "fixed";

  button.style.left = Math.random() * 80 + 10 + "%";

  button.style.top = Math.random() * 80 + 10 + "%";

  button.style.transform = "rotate(" + (Math.random() * 30 - 15) + "deg)";
}

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  const hearts = ["❤️", "💕", "💗", "💖", "💘", "💝", "💞"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 700);

function createManyHearts() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 100);
  }
}
