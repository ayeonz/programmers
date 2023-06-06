function solution(s) {
    let arr = s.split(' ').map((v) => v * 1);
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) answer -= arr[i - 1];
        else answer += arr[i];
    }

    return answer;
}
