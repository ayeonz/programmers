function solution(numbers) {
    const newMapArr = numbers.map((item) => item * 2);
    return newMapArr;

    // return numbers.reduce((a, b) => [...a, b * 2], []);
}
