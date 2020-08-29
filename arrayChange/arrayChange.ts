function arrayChange(inputArray: number[]): number[][] {
    let changes = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        console.log(inputArray[i + 1]);

        while (inputArray[i] >= inputArray[i + 1]) {
            changes += 1
            inputArray[i + 1] = inputArray[i + 1] + 1
        }
        while (inputArray[i + 1] - inputArray[i] > 1) {

            changes += 1
            inputArray[i] = inputArray[i] + 1
        }
    }
    return [[changes], inputArray];
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 6, 4]));