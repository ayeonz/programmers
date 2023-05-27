function solution(n) {
    return Array.from(String(n))
        .map((v) => v * 1)
        .reduce((a, b) => a + b);
}
