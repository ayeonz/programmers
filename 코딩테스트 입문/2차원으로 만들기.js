function solution(num_list, n) {
    var answer = [[]];
    
    for(let i = 0; i < num_list.length; i++) {
        answer.push(num_list.slice(i * n, i * n + n));
    }
    
    return answer.filter(el => el != '');
    
//     const answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0, n));
//     }

//     return answer;
}