// CoinFlip
const coinFlip = (): Promise<'win' | 'lose'> => {
  return new Promise((resolve, reject) => {
    const result = Math.random() < 0.5 ? 'win' : 'lose';
    setTimeout(() => {
      if (result === 'win') {
        resolve('win');
      } else {
        reject('You lost the coin flip ⁉️');
      }
    }, 500);
  });
};

coinFlip()
.then((result) => {
  console.log(`Result: ${result}`);
})
.catch((error) => {
  console.error(`Message: ${error}`);
});

