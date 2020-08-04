'use strict';
const memo = new Map(); //マップ作成
memo.set(0, 0); //
memo.set(1, 1); //0と1を定義
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = feb(n - 1) + feb(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}