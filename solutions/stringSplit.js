const splitString = (string, separator) => {
    console.log('in', string);

    const idx = string.indexOf(separator);
    // base
    if (idx === -1) {
        return [string];
    } else {
        // first element is first split from 0 to idx
        // second element is recursive call from idx + 1 to end
        // ^^ included as a spread inside the array to end up with correct formatting.
        return [
            string.slice(0, idx),
            ...splitString(string.slice(idx + 1), separator)
        ];
    }
}

console.log(splitString('02/20/2020', '/'));

// r1
//     '02/20/2020'
//     slice from 0 to index of separator 2
//     use spread to return [slice, splitString(...rest)]
// r2
//     '20/2020'
//     slice from 0 to index of separator 2
//     user spread to return [slice, splitString(...rest)]
// r3
//     '2020'
//     slice from 0 to index of separator