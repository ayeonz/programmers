// 배열 2개 입력받기
// 입력받은 배열 2개를 서로 순회하며 비교하기
// 비교하면서 true면 양수를 false면 음수로
// 나온 숫자 배열 요소를 다 합산한 후 반환하기

function solution(absolutes, signs) {
    let arr = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) arr += absolutes[i];
        else arr += absolutes[i] * -1;
    }

    return arr;
}
