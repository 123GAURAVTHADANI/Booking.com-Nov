function stringToNumber(str) {
  return Number(str);
}
function eligibleForVote(age) {
  if (age >= 18) {
    return "You are eligible for voting.";
  } else {
    return "You are not eligible for voting.";
  }
}

module.exports = { stringToNumber, eligibleForVote };
