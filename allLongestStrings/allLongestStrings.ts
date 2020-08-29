function allLongestStrings(inputArray: string[]): string[] {

    let biggestLenght = 0

    inputArray.forEach((item) => {
        biggestLenght = biggestLenght < item.length
            ? item.length
            : biggestLenght
    })

    return inputArray.filter((item) => {
        return item.length === biggestLenght
    })
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));