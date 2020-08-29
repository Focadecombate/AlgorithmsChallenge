function alphabeticShift(inputString: string): string {
    let arrayOfChars = [...inputString]

    arrayOfChars.forEach((item, i) => {
        let code = item.toLowerCase().charCodeAt(0) + 1

        if (code > 122) {
            code = 97
        }

        arrayOfChars[i] = String.fromCharCode(code)

    })

    return arrayOfChars.join()
}

console.log(alphabeticShift('crazy'));