function solution(num_list) {
    let answer = num_list.filter((item) => item % 2 === 0).length;
    let answer2 = num_list.filter((item) => item % 2 === 1).length;
    return [answer, answer2];
}
