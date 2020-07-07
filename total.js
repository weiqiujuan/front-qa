const arr = [1, 3, 4, 6, 8, 9]
const s = 9;
const main = (arr, s) => {
    if (!arr.length || !s) return
    for (let i = 0; i < arr.length; i++) {
        let number = s - arr[i]
        if (arr.includes(number)) {
            console.log([arr[i], number])
            return [arr[i], number]
        }
    }
    return
}
main(arr, s)