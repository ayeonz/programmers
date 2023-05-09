function solution(n) {
    const answer = Array.from({ length: n + 1 }, (_, i) => i);
    const answer2 = answer.filter((item) => item % 2 === 1);
    return answer2;
}
