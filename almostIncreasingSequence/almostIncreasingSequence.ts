function almostIncreasingSequence(sequence: number[]): boolean {
    let errors = 0;

    for (let i = 0; i < sequence.length; i++) {
        if ((sequence[i] <= sequence[i + 1])) {
            errors++
            if (sequence[i] <= sequence[i - 1] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }

    return errors <= 1
}

console.log(almostIncreasingSequence([1, 3, 1, 2]))

console.log(almostIncreasingSequence([1, 3, 2]))