// 0, 1, 1, 2, 3, 5, 8, 13...
// ?, 1, 2, 3, 4, 5, 6, 7...
const fibonacci = (n) => {

    if (n < 1 ) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1 ) + fibonacci(n - 2)

}

console.log(fibonacci(20));