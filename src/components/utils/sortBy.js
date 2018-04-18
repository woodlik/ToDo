export default (list, order) => {
    let propName = order.replace('-', '')

    let ret = [...list].sort((a, b) => {
        let aProp = a[propName]
        let bProp = b[propName]
        return aProp > bProp ? 1 : aProp === bProp ? 0 : -1
    })
    return order[0] === '-' ? ret.reverse() : ret
}