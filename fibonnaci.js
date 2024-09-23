function fibonacci(n) {
    const fibonacci = [];
    fibonacci[1] = 1;
    fibonacci[2] = 1;
    
    for(let i = 3; i < n; i++){
       fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    for (let i = 1; fibonacci.length > i; i++){
        console.log(fibonacci[i]);
    }
    if (fibonacci.includes(n)){
        console.log("este número pertence a sequência!");
    } else {
        console.log("este número não pertence a sequência!");
    }

    return fibonacci;
}

function main() {
    let iniciador = 4;
    fibonacci(iniciador);
    
}

main();
