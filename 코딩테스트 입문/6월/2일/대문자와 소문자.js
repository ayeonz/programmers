function solution(my_string) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        my_string[i] === my_string[i].toLowerCase()
            ? (answer += my_string[i].toUpperCase())
            : (answer += my_string[i].toLowerCase());
    }

    return answer;
}
