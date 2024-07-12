const capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const reverseString = (str) => {
    return str.split("").reverse().join("")
}

const calculate = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

const caesarCipher = (str, shift) => {
    const isLetter = (char) => {
        return char.toLowerCase() !== char.toUpperCase();
    }

    const shiftChar = (char, shift) => {
        if (!isLetter(char)) {
            return char;
        }

        const charCode = char.charCodeAt(0);
        const baseCode = char.toLowerCase() === char ? 97 : 65;
        const newCharCode = ((charCode - baseCode + shift) % 26) + baseCode;

        return String.fromCharCode(newCharCode);
    }

    return str.split('').map(char => shiftChar(char, shift)).join('');
}

const analyzer = (arr) => {
    const add = arr.reduce((acc, val) => acc + val, 0);
    const average = add / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average,
        min,
        max,
        length
    };
}

module.exports = { capitalise, reverseString, calculate, caesarCipher, analyzer }