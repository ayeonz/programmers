function solution(numer1, denom1, numer2, denom2) {
    // 분자
    let top = numer1 * denom2 + numer2 * denom1;

    // 분모
    let bottom = denom1 * denom2;

    // 약분하는 수
    let common = 1;

    for (let i = 1; i <= top; i++) {
        if (top % i === 0 && bottom % i === 0) {
            common = i;
        }
    }

    return [top / common, bottom / common];
}
