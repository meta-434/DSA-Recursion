
const binary = (input, result='') => {

    // console.log('input', input, 'result', result);
    if (input === 0) {
        return 0 + result;
    }

    if (input === 1) {
        return 1 + result;
    }

    let quot;

    let rem = input % 2
    if (rem === 0) {
        quot = input / 2;
    } else {
        quot = 1;
    }

    return binary(quot, rem + result);
}

console.log(binary(32));