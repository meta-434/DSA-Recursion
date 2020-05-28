const powerCalculator = (base, exp) => {
    if (exp < 0) {
        return 'exponent should be >= 0'
    }

    if (exp === 0) {
        return 1;
    }

    if (exp === 1) {
        return base;
    }

    let newExp = exp - 1;
    return base * powerCalculator(base, newExp)
}

console.log('\n'+powerCalculator(2, 8));
