function solution(my_string) {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return my_string.split('')
                    .map(el => Number(el))
                    .filter(el => num.includes(el))
                    .sort((a, b) => a - b);
    
    // 문자열에 * 1 하면 숫자로 변환 받을 수 있다 
}
