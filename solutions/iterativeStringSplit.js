const iterSplitString = (string, separator) => {
    let result = [];
    let word = '';

    for (let i = 0; i < string.length; i++) {
        // console.log('letter', string[i])
        if (string[i] === separator) {
            // console.log('word', word)
            result.push(word);
            word = '';
        } else {
            word += string[i]
        }
    }
    result.push(word);
    return result;
}

console.log(iterSplitString('02/20/2020', '/'));