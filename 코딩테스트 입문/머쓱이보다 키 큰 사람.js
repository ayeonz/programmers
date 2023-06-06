function solution(array, height) {
    const newFilterArr = array.filter((el) => el > height);
    return newFilterArr.length;
}
