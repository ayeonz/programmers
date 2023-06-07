function solution(s) {
    s = s.split('').sort();
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s.filter((el) => s[i] == el).length === 1) answer += s[i];
    }

    return answer;
}
