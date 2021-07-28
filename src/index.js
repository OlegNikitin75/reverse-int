module.exports = function reverse(n) {
    const abs = Math.abs(n)
    const string = String(abs).split('').reverse().join('');
    const numReverse = Number(string);

    return numReverse;
}
