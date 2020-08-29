function arrayConversion(inputArray: number[]): number {
    let isOdd = true;

    while (inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd
    }
    return inputArray[0]
}

function sumProduct(array: number[], isOdd: boolean) {
    const sumProducts: number[] = []

    if (isOdd) {
        for (let index = 0; index < array.length; index += 2) {
            sumProducts.push(array[index] + array[index + 1])
        }
    }
    else {
        for (let index = 0; index < array.length; index += 2) {
            sumProducts.push(array[index] * array[index + 1])
        }
    }
    return sumProducts;

}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
