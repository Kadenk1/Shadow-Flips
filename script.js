document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "＋";
    });

    item.classList.add("active");
    item.querySelector(".icon").textContent = "✕";
  });
});