// nth triangular number is equal to the prev. + n
// so first is 1, second is 1 + (2) = 3, third is 3 + (3) = 6, fourth is 6 + (4) = 10, fifth is 10 + (5) = 15, ETC.

const triangularNumber = (n) => {
    // base case
    if (n === 1) {
        return 1;
    }

    // step backwards
    return  triangularNumber(n - 1) + n
    // eg: 3 -> 3 + (2 + (1)) = 6
    // eg: 4 -> 4 + (3 + (2 + (1))) = 10;
};

console.log(triangularNumber(4));