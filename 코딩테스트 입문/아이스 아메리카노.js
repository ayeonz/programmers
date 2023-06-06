function solution(money) {
    const num = Math.floor(money / 5500);
    const change = money - num * 5500;
    return [num, change];
}
