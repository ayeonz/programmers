// 머쓱이가 갖고 있는 구슬의 개수 balls | 친구들에게 나누어 줄 구슬 개수 share

function factorial(num) {
    let result = 1;
    for (let i = 1; num >= i; i++) {
        result = result * i;
    }
    return result;
}

function solution(balls, share) {
    let answer = factorial(balls) / (factorial(balls - share) * factorial(share));
    return Math.round(answer);
}
