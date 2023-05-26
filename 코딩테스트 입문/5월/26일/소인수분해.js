function solution(n) {
    let answer = [];

    for(let i = 2; i <= n; i) {
        if(n % i === 0) {
            n /= i;
            answer.push(i);
        } else i++;
    }

    // v = element / i = index => true / false 반환
    // return answer.filter((v, i) => answer.indexOf(v) === i);
    return [...new Set(answer)];
}