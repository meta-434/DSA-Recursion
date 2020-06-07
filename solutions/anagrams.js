const anagram = (word) => {
    const results = [];

    // base case
    if (word.length === 1)
    {
        results.push(word);
        return results;
    }

    // m run, a run, t run, h run
    // 4x
    for (let i = 0; i < word.length; i++)
    {
        const prefix = word[i];
        const body = word.substring(0, i) + word.substring(i + 1);
        const otherPermutations = anagram(body);

        for (let j = 0; j < otherPermutations.length; j++) {
            results.push(prefix + otherPermutations[j]);
        }
    }
    return results;
};

console.log(anagram('math'));