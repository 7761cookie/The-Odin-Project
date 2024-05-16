const removeFromArray = function (array, ...args) {
    let newArray = [];

    array.forEach((entry) => {

        if (!args.includes(entry)) {
            newArray.push(entry);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
