function getAverage(testScores) {
  const sum = testScores.reduce((p, c) => p + c, 0);
  const count = testScores.length;
  return sum/count;
}

function getGrade(score) {
  return (score == 100) ? "A+" : (score >=90 && score <= 99) ? "A" : (score >=80 && score <=89) ? "B" : (score >=70 && score <=79) ? "C" : (score >=60 && score <=69) ? "D" : "F";
}

function hasPassingGrade(score) {
  return (getGrade(score) != "F");
}

function studentMsg(testScores,score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(score)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(score)}. You failed the course.`;
  }
}

// Call functions and log to console
const scoresArr = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
console.log(getAverage(scoresArr));
console.log(studentMsg(scoresArr, 37));
console.log(studentMsg(scoresArr, 100))
console.log(getGrade(100));
console.log(hasPassingGrade(59));
