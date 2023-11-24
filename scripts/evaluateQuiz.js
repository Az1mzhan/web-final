export const evaluateQuiz = () => {
  const correctResponses = [
    "2500",
    "socrates",
    "true",
    "false",
    "glucose",
    "phthalates",
    "90",
  ];

  const checkLists = document.querySelectorAll("input:checked");
  const standardInputs = document.querySelectorAll(
    "input:not([type='radio']):not([type='submit'])"
  );

  const inputs = [...checkLists, ...standardInputs];

  let cnt = 0;

  for (let i = 0; i < inputs.length; ++i) {
    if (inputs[i].value === correctResponses[i]) cnt++;
  }

  let msg;

  if (cnt <= 4) msg = "There is a room for improvement!";
  else if (cnt >= 5 && cnt < 7) msg = "You almost succeeded!";
  else msg = "Well done!";

  return [`${msg}`, `${cnt} / ${correctResponses.length}`];
};
