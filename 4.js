function A(n) {
    return 1 + (n - 1) * 2;
}
console.log(A(5));  // 9

function B(n) {
    return 2 * Math.pow(2, n - 1);
}
console.log(B(7));  // 128

function C(n) {
    return Math.pow(n - 1, 2);
}
console.log(C(8));  // 49

function D(n) {
    return Math.pow(n * 2, 2);
}
console.log(D(5));  // 100

function fibonacci(n) {
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
console.log(fibonacci(7));  // 13

function F(n) {
    const seq = [2, 10, 12, 16, 17, 18, 19];
    let current = 19;
    for (let i = 7; i < n; i++) {
        current += 1;  // Increment by 1
        seq.push(current);
    }
    return seq[n - 1];
}
console.log(F(8));  // 20
