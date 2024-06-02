const palindromes = function (str) {

    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const firstString = str
        .toLowerCase()
        .split('')
        .filter((char) => chars.includes(char))
        .join('');

    const reverseStr = firstString.split('').reverse('').join('')

    return firstString === reverseStr

};
// Do not edit below this line
module.exports = palindromes;
