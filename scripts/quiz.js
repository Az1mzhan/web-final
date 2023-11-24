import { evaluateQuiz } from "./evaluateQuiz.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-quiz-btn").addEventListener("click", () => {
    const res = document.querySelector("#quiz-points-taken");

    const [msg, points] = evaluateQuiz();

    res.innerHTML = `<h2 id="modal-points">${points}</h2> <p class="mt-5">${msg}</p>`;
  });
});
