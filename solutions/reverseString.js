const reverseString = (string) => {
    if (string.length === 1 || string === '') {
        return string;
    }

        const postfix = string[0];
        const newString = string.slice(1);

        // console.log('postfix', postfix, ' newString', newString);
        return reverseString(newString) + postfix;


}


console.log(reverseString('c\'hwec\'h'));
// wanted to try it with escaped characters