const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let ans = '';
    for (let i = 0; i < Number(input[0]); i++) {
        if (i < Number(input[0])) ans += '*'.repeat(i + 1) + '\n';
    }
    console.log(ans);
});
