function solution(n) {
    let answer = 0;

    for(let i = n; i >= 0; i--) {
        let count = 0;

        for(let j = 1; j <= i; j++) {
            if(i % j === 0) count++;
        }

        if(count >= 3) answer++;
    }
    
    return answer;
}