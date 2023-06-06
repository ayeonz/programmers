function solution(emergency) {
    let arr = [...emergency].sort((a, b) => b - a); // [3, 24, 76]
    let answer = [];

    for (let i = 0; i < emergency.length; i++) {
        answer.push(arr.indexOf(emergency[i]) + 1);
    }

    return answer;
}
