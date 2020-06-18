const iterFibonacci = (n) => {
    let v1 = 1;
    let v2 = 1;
    let res = [1, 1];

    for (let i = 0; i < n-2; i++) {
        res.push(v1 + v2);
        v1 = v2;
        v2 = res[res.length-1];
    }

    return res[res.length - 1];
}

console.log(iterFibonacci(20));