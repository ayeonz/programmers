function solution(my_string, num1, num2) {
    let arr = my_string.split('');
    let answer = '';

    for (let i = 0; i < arr.length; i++) {
        if (i === num1) answer += arr[num2];
        else if (i === num2) answer += arr[num1];
        else answer += arr[i];
    }

    return arr.join('');
}

// 구조 분해 할당으로도 풀 수 있음!!
// [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
