import fetch from 'node-fetch';
// Simulate a coin flip with a Promise
const coinFlip = () => {
    return new Promise((resolve, reject) => {
        const result = Math.random() < 0.5 ? 'win' : 'lose';
        setTimeout(() => {
            if (result === 'win') {
                resolve('win');
            }
            else {
                reject('You lost the coin flip!');
            }
        }, 500);
    });
};
// Fetch random advice from API
const fetchAdvice = (id) => {
    return fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch advice: ${response.status}`);
        }
        return response.json();
    })
        .then((data) => data.slip.advice);
};
// Play game using chaining
coinFlip()
    .then((result) => {
    console.log(`Coin flip result: ${result}`);
    const randomId = Math.floor(Math.random() * 200) + 1;
    return fetchAdvice(randomId);
})
    .then((advice) => {
    console.log(`💡 Advice: "${advice}"`);
})
    .catch((error) => {
    console.error('❌', error);
});
//# sourceMappingURL=coinFlipAdvice.js.map