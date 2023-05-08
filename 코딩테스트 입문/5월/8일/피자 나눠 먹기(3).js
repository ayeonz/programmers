function solution(slice, n) {
    if (1 < slice < 11) {
        let answer = Math.ceil(n / slice);
        return answer;
    }
}
