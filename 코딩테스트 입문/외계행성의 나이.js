function solution(age) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    let arr = String(age)
        .split('')
        .map((el) => Number(el));

    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(alpha[arr[i]]);
    }

    return ans.join('');
}
