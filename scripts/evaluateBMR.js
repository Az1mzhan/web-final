export const evaluateBMR = (weight, height, age, gender) => {
  if (gender === "female") return 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  return 66 + 13.7 * weight + 5 * height - 6.8 * age;
};
