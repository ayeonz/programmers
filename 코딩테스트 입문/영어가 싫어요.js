function solution(numbers) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < arr.length; i++) {
        numbers = numbers.split(arr[i]).join(i);
    }

    return parseInt(numbers);
}

// Number(numbers) => 했을 때 6번 케이스가 통과가 안 됨
// 추측해 본 이유: 모르겠음
