function addTwoDigits(n: any): number {
    if (typeof n === "number") {
        n = n.toString()
    }

    let arrayofN = [...n];

    return arrayofN.reduce((a: string, b: string) =>
        (parseInt(a) + parseInt(b)))
}

console.log(addTwoDigits(1002));
console.log(addTwoDigits(12));
console.log(addTwoDigits(99));