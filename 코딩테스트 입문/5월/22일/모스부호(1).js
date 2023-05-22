function solution(letter) {
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    
    // filter(el => !morse[el]) true => value arr['.-']
    let arr = letter.split(' ').map(el => morse[el]);
    
    console.log(arr)
    console.log(letter.filter((el) => morse[el])); // arr 배열 그대로 출력
    
    return arr.join('');
}