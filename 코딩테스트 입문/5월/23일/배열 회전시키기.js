function solution(numbers, direction) {
    let answer = [];
    
    if(direction === 'right') {
        answer.push(numbers[numbers.length - 1])
        for(let i = 0; i < numbers.length - 1; i++) {
            answer.push(numbers[i]);
        }
    } else {
        for(let i = 1; i < numbers.length; i++) {
            answer.push(numbers[i]);
        }
        answer.push(numbers[0]);
    }
    
    return answer;
}

// 더 좋은 코드
// function solution(numbers, direction) {
//     let answer = [];

//     if ("right" == direction) {
//         numbers.unshift(numbers.pop());
//     } else {
//         numbers.push(numbers.shift());
//     }

//     answer = numbers;

//     return answer;
// }
