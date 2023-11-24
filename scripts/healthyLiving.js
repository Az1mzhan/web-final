import { evaluateBMR } from "./evaluateBMR.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("eval-bmr-btn").addEventListener("click", () => {
    const checkLists = document.querySelectorAll("input:checked");
    const standardInputs = document.querySelectorAll(
      "input:not([type='radio']):not([type='submit'])"
    );

    const inputs = [...checkLists, ...standardInputs];

    let person = {
      weight: null,
      height: null,
      age: null,
      gender: "male",
    };

    for (let i = 0; i < inputs.length; ++i) {
      if (inputs[i].id === "height") person.height = parseInt(inputs[i].value);
      else if (inputs[i].id === "weight")
        person.weight = parseInt(inputs[i].value);
      else if (inputs[i].id === "age") person.age = parseInt(inputs[i].value);
      else if (inputs[i].id === "male" || inputs[i].id === "female")
        person.gender = inputs[i].value;
    }

    const calcRes = document.querySelector("#calc-res");

    calcRes.textContent = `${evaluateBMR(
      person.weight,
      person.height,
      person.age,
      person.gender
    ).toFixed(2)} cal`;
  });

  document.getElementById("mov-to-calc-btn").addEventListener("click", () => {
    document.querySelector("#healthy-living-advice-3").scrollIntoView();
  });
});
