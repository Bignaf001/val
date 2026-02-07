const openCard = document.getElementById("openCard");
const card = document.getElementById("card");
const start = document.getElementById("start");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const surprise = document.getElementById("surprise");
const yesSound = document.getElementById("yesSound");
const share = document.getElementById("share");

let speed = 200; // NO button movement range

// Open card
openCard.addEventListener("click", () => {
  start.classList.add("hidden");
  card.classList.remove("hidden");
});

// NO button moves faster each time
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * speed;
  const y = Math.random() * 100;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  speed += 70; // makes it harder every time 😈
});

// YES clicked
yesBtn.addEventListener("click", () => {
  yesSound.play();
  card.classList.add("hidden");
  surprise.classList.remove("hidden");

  // WhatsApp share link
  const message = "I just said YES to being the love of your life forever 💖🥰";
  share.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
});
document.getElementById("introVideo").muted = false;
alert("JS Loaded");
