// const fibs = (n) => {
//     let arr = [];

//     if (n === 0) {
//         return [0];
//     }

//     if (n === 1) {
//         return [0, 1];
//     }

//     arr = [0, 1]; // Initialize the array with the first two Fibonacci numbers

//     for (let i = 2; i < n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }

//     return arr;
// }

const fibs = (n) => {

    const constructor = (n, arr) => {
        if (n === 0) {
        return [0]
        }
        if (n === 1) {
            return [0, 1]
        }
        if (arr.length >= n) {
            return arr
        }

        const fibsRec = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(fibsRec);

        return constructor(n, arr)
    }
    
    return constructor(n, [0, 1])
}

const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    const mergeRec = () => {
        if (leftIndex >= left.length && rightIndex >= right.length) {
            return result;
        }

        if (leftIndex < left.length && (rightIndex >= right.length || left[leftIndex] <= right[rightIndex])) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        return mergeRec();
    };

    return mergeRec();
};

// Test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Expected output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Expected output: [79, 100, 105, 110]