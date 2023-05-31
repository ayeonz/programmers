function solution(order) {
    order = [...String(order)];
    let count = 0;

    for (let el of order) {
        ['3', '6', '9'].includes(el) ? ++count : count;
    }

    return count;
}

// return Array.from(order.toString()).filter(v => ['3', '6', '9'].includes(v)).length
