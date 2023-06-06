function solution(my_string) {
    return my_string.split('').map(v => v * 1).filter(v => !isNaN(v)).reduce((a, b) => a + b);
}