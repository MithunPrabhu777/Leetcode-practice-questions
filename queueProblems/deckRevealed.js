const deckRevealedIncreasing = (deck) => {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length) {
    ans.unshift(deck.pop());
    ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};

let deck = [17, 13, 11, 2, 3, 5, 7];

console.log(deckRevealedIncreasing(deck));
