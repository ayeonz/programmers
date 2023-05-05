function solution(numbers) {
    let result = numbers.reduce((sum, n) => {
        return sum + n;
    });
    return result / numbers.length;
}
