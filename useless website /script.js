const facts = [
    "🗝️ Anywhere Key: Opens any door to any location you imagine, instantly.",
    "🧠 Head Key: Lets you unlock your mind and remove or insert memories, thoughts, or knowledge.",
    "👻 Ghost Key: Turns you into a ghost when you pass through a door — your body drops lifeless.",
    "🌑 Omega Key: Unlocks the Black Door, which hides a dark, otherworldly force.",
    "🎭 Identity Key: Allows you to change your face — and identity — at will.",
    "🕰️ Time Shift Key: Enables travel through time using the grandfather clock in Keyhouse.",
    "🌫️ Echo Key: Revives echoes (souls) of the dead — but they can never leave Keyhouse.",
    "🛡️ Shadow Key: Summons deadly shadow creatures under your control when used with the Crown of Shadows.",
    "📜 Memory Key: Lets adults remember magic — removing the “forgetting” curse."
  ];
  
  function revealInfo(lockElement) {
    if (lockElement.classList.contains("open")) return;
  
    const infoDiv = lockElement.querySelector('.info');
    const randomIndex = Math.floor(Math.random() * facts.length);
    infoDiv.textContent = facts[randomIndex];
  
    lockElement.classList.add("open");
  }
  
  function resetLocks() {
    document.querySelectorAll(".lock").forEach(lock => {
      lock.classList.remove("open");
      lock.querySelector(".info").textContent = "";
    });
  }
  