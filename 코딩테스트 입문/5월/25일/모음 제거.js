function solution(my_string) {
    let alpha = ['a', 'e', 'i', 'o', 'u'];

    // 1차 풀이
//     let answer = '';

//     for(let i = 0; i < my_string.length; i++) {
//         if(alpha.includes(my_string[i])) answer += '';
//         else answer += my_string[i];
//     }
    
//     return answer;

    // 2차 풀이
    return my_string.split('').filter(el => !alpha.includes(el)).join('');
}