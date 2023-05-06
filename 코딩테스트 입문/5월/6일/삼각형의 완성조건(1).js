function solution(sides) {
    //   // 가장 긴 변의 길이 구하기
    //   const sortArr = sides.sort().reverse();
    //     const longestSide = sortArr[0];

    //   // 나머지 두 값의 합 구하기
    //   const addTwoSides = sortArr[1] + sortArr[2];

    //   // 위의 둘을 비교하기
    //   if (longestSide < addTwoSides) {
    //     return 1;
    //   } else {
    //    return 2;
    //   }

    sides.length = 3;

    const sidesM = Math.max(...sides);
    const sidesN = sides.filter((el) => !(el == sidesM) || el === sidesM);

    if (sidesM < sidesN[0] + sidesN[1]) {
        return 1;
    } else {
        return 2;
    }
}
