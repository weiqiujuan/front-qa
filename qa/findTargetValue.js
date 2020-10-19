const obj = {
    id: 1,
    children: [
        {id: 2},
        {
            id: 3,
            children: [
                {
                    id: 5,
                    children: [
                        {id: 6}
                    ]
                }
            ]
        },
        {
            id: 4
        }
    ]
}

function findTargetInObj(obj, targetValue) {
    if (!obj.children) return false
    let arr = obj.children, parentid = obj.id;
    for (let item of arr) {
        if (item.id === targetValue) {
            return parentid
        }
        if (item.children) {
            parentid = findTargetInObj(item, targetValue)
        }
    }
    return parentid
}

console.log(findTargetInObj(obj, 5))
console.log(findTargetInObj(obj, 4))