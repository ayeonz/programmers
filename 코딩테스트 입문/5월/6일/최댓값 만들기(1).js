function solution(numbers) {
    numbers.sort((a, b) => a - b);
    let answer1 = numbers.pop();
    let answer2 = numbers.filter((el) => numbers - answer1 || !(numbers === answer1));
    let answer3 = Math.max(...answer2);

    return answer1 * answer3;

    //     numbers.sort((a,b)=>b-a);
    // return numbers[0]*numbers[1];
}
