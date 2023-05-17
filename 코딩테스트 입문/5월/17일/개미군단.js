// 장군개미: 5, 병정개미: 3, 일개미: 1

function solution(hp) {
    let top = 5;
    let middle = 3;
    let bottom = 1;

    return (
        Math.floor(((hp % top) % middle) / bottom) +
        Math.floor((hp % top) / middle) +
        Math.floor(hp / top)
    );
}
