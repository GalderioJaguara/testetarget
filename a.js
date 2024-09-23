let palavra = "wsd".toLowerCase();
let c = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] == 'a'){
        c++;
    }
}

console.log(palavra.includes("a"));
console.log(c);


