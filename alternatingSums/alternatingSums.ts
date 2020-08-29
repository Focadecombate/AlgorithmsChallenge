function alternatingSums(numbers: number[]): number[] {
    let result: number[] = [0, 0]

    numbers.forEach((number, index) => {
        /* Se for par soma no [0] se for impar [1] */
        result[index % 2 === 0 ? 0 : 1] += number
    })
    return result
}


console.log(alternatingSums([50, 60, 60, 45, 70]))
