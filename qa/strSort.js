const arr = [
    '1.1',
    '2.3.3',
    '4.3.5',
    '0.3.1',
    '0.302.1',
    '4.20.0',
    '4.3.5.1',
    '1.2.3.4.5'
];
arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    while (true) {
        const s1 = arr1[i];
        const s2 = arr2[i++];

        if (s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length;
        }
        if (s1 === s2) continue;

        return s2 > s1 ? -1 : 1;
    }
});

console.log(arr)