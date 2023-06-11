// 놀이기구의 원래 이용료 : price | n번 이용시 원래 이용료의 n배 ex) 이용료 : 100 2번 이용시 200
// 놀이기구의 n번 총 이용료 구하기
// 원래 가지고 있는 금액에서 모자라면 얼마가 모자라는지 구해서 반환
// 부족하지 않다면 0 반환

function solution(price, money, count) {
    let ans = price;

    for (let i = 2; i <= count; i++) {
        ans += i * price;
    }

    if (money > ans) return 0;
    else return ans - money;
}
