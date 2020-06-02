// 0, 1, 1, 2, 3, 5, 8, 13...
// ?, 1, 2, 3, 4, 5, 6, 7...
const fibbonacci = (n) => {

    if (n < 1 ) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }

    return fibbonacci(n - 1 ) + fibbonacci(n - 2)

}

console.log(fibbonacci(20));