function solution(n, k) {
    let juice = Math.floor(n / 10);
    return 12000 * n + (k * 2000 - juice * 2000);
}
