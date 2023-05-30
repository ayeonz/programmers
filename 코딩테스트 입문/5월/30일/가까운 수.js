function solution(array, n) {
    array = array.sort((a, b) => a - b);
    let arr = [];

    // [[3, 17], [10, 10], [28, 8]]
    for (let i = 0; i < array.length; i++) {
        if (n > array[i]) arr.push([array[i], n - array[i]]);
        else arr.push([array[i], array[i] - n]);
    }

    // [[28, 8], [10, 10], [3, 17]]
    arr = arr.sort((a, b) => a[1] - b[1]);

    // [28, 8] => 28
    return arr[0][0];
}

// Math.abs() 절댓값 구하기
