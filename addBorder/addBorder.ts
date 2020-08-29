function addBorder(picture: string[]): string[] {

    let length = picture[0].length + 2;
    let wall = "*".repeat(length)

    picture.forEach((item, i) => {
        let edited = picture[i]
        picture[i] = `*${edited}*`
    })

    picture.unshift(wall)
    picture.push(wall)

    return picture
}

console.log(addBorder(["abce", "dedf"]));