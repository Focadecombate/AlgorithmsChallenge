function alphabetSubsequence(s: string): boolean {
    let charArray = [...s];

    for (let i = 0; i < charArray.length - 1; i++) {
        if (charArray[i].charCodeAt(0) === charArray[i + 1].charCodeAt(0)) {
            return false
        }
        if (charArray[i].charCodeAt(0) > charArray[i + 1].charCodeAt(0)) {
            return false
        }
    }

    return true;

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
