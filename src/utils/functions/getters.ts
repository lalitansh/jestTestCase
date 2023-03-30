export const checkEveryLength = (...restParam: Array<any>) => {
    let arr = [];
    arr = [...restParam];
    const val = arr.every((item) => item.toString().length > 0)
    return val
}

// program to get a random item from an array

export const getRandomItem = (arr: Array<any>) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length)
    // get random item
    const item = arr[randomIndex];

    return item;
}