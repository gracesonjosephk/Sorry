window.addEventListener("DOMContentLoaded", () => {
  // ===== PAGE 1 =====
  const heroGif = document.getElementById("heroGif");
  const continueBtn = document.getElementById("continueBtn");

  if (heroGif) {
    heroGif.src = "gifs/page1.gif"; // ✅ local gif
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      window.location.href = "page2.html";
    });
  }

  // ===== PAGE 2 =====
  const page2Gif = document.getElementById("page2Gif");
  const nextBtn = document.getElementById("nextBtn");

  if (page2Gif) {
    page2Gif.src = "gifs/page2.gif"; // ✅ local gif
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.location.href = "page3.html";
    });
  }

  // ===== PAGE 3 =====
  const goPage4 = document.getElementById("goPage4");
  const bars = document.querySelectorAll("[data-bar]");

  if (goPage4 && bars.length) {
    const messages = {
      1: "I shouldn’t have treated you that way, and I’m sorry",
      2: "I promise I’ll be better for you.",
      3: "No matter my mood, I’ll try my best to treat you like my queen.",
    };

    const opened = new Set();

    function updateButton() {
      goPage4.disabled = opened.size < 3;
    }

    bars.forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-bar");
        opened.add(id);

        const textEl = document.getElementById(`barText${id}`);
        if (textEl) textEl.textContent = messages[id];

        el.classList.add("opened");
        updateButton();
      });
    });

    goPage4.addEventListener("click", () => {
      if (opened.size >= 3) window.location.href = "page4.html";
    });

    updateButton();
  }

  // ===== PAGE 4 =====
  const p4gif1 = document.getElementById("p4gif1");
  const p4gif2 = document.getElementById("p4gif2");
  const openSorry = document.getElementById("openSorry");

  if (p4gif1) p4gif1.src = "gifs/page3_1.gif"; // ✅ local gif
  if (p4gif2) p4gif2.src = "gifs/page3_2.gif"; // ✅ local gif

  if (openSorry) {
    openSorry.addEventListener("click", () => {
      window.location.href = "page5.html";
    });
  }

  // ===== PAGE 5 =====
  const backHome = document.getElementById("backHome");
  if (backHome) {
    backHome.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});