const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("msg");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 60;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  msg.innerHTML = "YAY 😭💖 I knew it!";
});
