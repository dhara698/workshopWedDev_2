const container = document.getElementById("bubble-container");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random location within container
  const left = Math.random() * (container.clientWidth - 60);
  const top = Math.random() * (container.clientHeight - 60);
  bubble.style.position = "relative";
  bubble.style.left = `${left}px`;
  bubble.style.top = `${top}px`;

  bubble.addEventListener("click", () => {
    bubble.remove();
    createBubble(); // Respawn new bubble
  });

  container.appendChild(bubble);
}

function startBubbleWrap(count = 30) {
  for (let i = 0; i < count; i++) {
    createBubble();
  }
}

startBubbleWrap();
