function solution(quiz) {
    let res = [];

    quiz.forEach((el) => {
        let arr = el.split(' ');

        if (arr[1] === '-') {
            +arr[0] - +arr[2] === +arr[4] ? res.push('O') : res.push('X');
        } else if (arr[1] === '+') {
            +arr[0] + +arr[2] === +arr[4] ? res.push('O') : res.push('X');
        }
    });

    return res;
}

// +연산자를 붙이면 양수로 변환(Number 타입으로 변환됨)
