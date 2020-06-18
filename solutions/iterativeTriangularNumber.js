const iterTriangularNumber = (n) => {
    let hold = 0;

    for (let i = n; i >= 1; i--) {
        hold += i;
    }

    return hold;
}

console.log(iterTriangularNumber(32));