const iterReverseString = (string) => {
    let res = [];

    if (string.length <= 1) return string;

    for (let i = 0; i < string.length; i++) {
        res[string.length - 1 - i] = string[i];
    }
    console.log(res.join(''));
}

iterReverseString('hello');

// i kinda really like the way this worked, lol
// even if it is strictly less efficient than the reverse loop