function solution(numbers) {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let different = num.filter((x) => !numbers.includes(x));

    return different.reduce((a, b) => a + b);
}
