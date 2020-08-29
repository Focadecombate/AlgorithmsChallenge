function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourStrongest = yourLeft > yourRight ? yourLeft : yourRight
    let yourWeakest = yourStrongest === yourRight ? yourLeft : yourRight
    let friendsStrongest = friendsLeft > friendsRight ? friendsLeft : friendsRight
    let friendsWeakest = friendsStrongest === friendsRight ? friendsLeft : friendsRight

    return yourStrongest === friendsStrongest && friendsWeakest === yourWeakest ? true : false

}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
