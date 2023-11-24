document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sound-btn").addEventListener("click", () => {
    const audio = new Audio("../media/sound.mp3");
    console.log(audio);
    audio.volume = 0.2;
    audio.play();
  });

  const articles = document.querySelectorAll("article");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const articleHeader = entry.target.querySelector(
          ":scope > .article-header"
        );

        const articleText = entry.target.querySelector(
          ":scope > .article-text"
        );

        if (entry.isIntersecting) {
          articleHeader.style.visibility = "visible";
          articleText.style.visibility = "visible";

          articleHeader.classList.add("scroll-article-text");
          articleText.classList.add("scroll-article-text");
        } else if (entry.intersectionRatio <= 0.375) {
          articleHeader.style.visibility = "hidden";
          articleText.style.visibility = "hidden";

          articleHeader.classList.remove("scroll-article-text");
          articleText.classList.remove("scroll-article-text");
        }
      });
    },
    { threshold: 0.5 }
  );

  for (let i = 0; i < articles.length; ++i) observer.observe(articles[i]);

  document.querySelector(".mov-btn").addEventListener("mouseover", () => {
    document.querySelector(".mov-btn").innerHTML =
      "<i class='fa-solid fa-angle-down fa-xl' style='color: white !important;'></i>";
  });

  document.querySelector(".mov-btn").addEventListener("mouseout", () => {
    document.querySelector(".mov-btn").innerHTML = "Move to the calculator";
  });

  document.addEventListener("keypress", (e) => {
    if (e.code === "KeyF") {
      document.querySelector("#app").appendChild();
    }
  });
});
