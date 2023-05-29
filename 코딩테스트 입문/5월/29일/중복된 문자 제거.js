function solution(my_string) {
    let arr = my_string.split('');

    return [...new Set(arr)].join('');
}
