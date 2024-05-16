const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b))
        return 'ERROR';

    if (a < 0 || b < 0)
        return 'ERROR';

    if (a > b) {
        let hold = 0;
        hold = a;
        a = b;
        b = hold;

    };

    let sum = 0;
    for (i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
