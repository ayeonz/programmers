function solution(my_string, n) {
    let answer = [...my_string].map((v) => v.repeat(n)).join('');
    console.log(answer);
    return answer;
}
