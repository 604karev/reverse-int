module.exports = function reverse (number) {
    return parseInt(number.toString().split('').reverse().join(''))
};
