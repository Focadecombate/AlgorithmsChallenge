function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = 0;

    for (let i = 0; i < inputArray.length - 1; i++) {

        let multiplication = inputArray[i] * inputArray[i + 1];

        largestProduct = largestProduct < multiplication ? multiplication : largestProduct

    }
    return largestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));