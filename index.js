//questão 1//
const alturas = [1.89, 1.83, 1.63, 1.69, 1.55, 1.56, 1.84, 1.63, 1.50, 2.03, 1.96, 1.70, 1.75, 1.61, 1.91]

let index = 0;
let maiorAltura = alturas[index];
let menorAltura = alturas[index];

while(index < 14) {
if(alturas[index] > maiorAltura) {
    maiorAltura = alturas[index];
}
if(alturas[index] < menorAltura) {
    menorAltura = alturas[index];
}
index++
}
     
console.log(`Maior altura:`, maiorAltura);
console.log(`Menor altura:`, menorAltura);

//Questão 2//
let alturaPedro = 1.50
let alturaLucas = 1.10
let i = 0

while (alturaLucas < alturaPedro) {
    alturaLucas += 0.03;
    alturaPedro += 0.02;
    i++;
}
console.log(`Demorou ${i} anos para Lucas ter a mesma altura de Pedro.`);

i = i + 1;

console.log(`Demorou ${i} anos para Lucas ser maior que Pedro.`);


//Questão 3
let multiplicando = Number(prompt('Digite aqui o seu multiplicando!'));
let multiplicador = Number(prompt('Digite aqui até que número você quer que sua tabuada vá!'));
while (multiplicador >= 0 ){
    console.log ( multiplicando * multiplicador);
multiplicador--
}


//Questão 4
for (i=0; i<=250; i++){
    if(i % 3 === 0){
        console.log (`${i} são múltiplos de 3`)
    }
    
    if(i % 5 === 0){
        console.log (`${i} são múltiplos de 5`)
    }
}


//Questão 5
let valor = Number(prompt('Escreva aqui seu valor:'))
let cont = 0

for(cont=0; cont<=valor; cont++){
    console.log(cont)
}
console.log('Fim!') 


//Questão 6
let valor1 = 30

for(valor1=30 ; valor1 != 0 ; valor1--){
    if (valor1 % 5 != 0 && valor1 % 3 != 0 && valor1 % 2 != 0 || valor1 === 2 || valor1 === 5 || valor1 === 3) {
        console.log(`[${valor1}]`)
    } else {
        console.log(`${valor1}`)
   }
} 


// Questão 7
let valores = [113,-201,1503,-501,250,180,-510,430,-150,103];
let media = 0;
let negativos = 0;
let positivos = 0;

for(i = 0; i <= 10; i++){

    if (valores[i] <= 0) {
        negativos++
    }

    if (valores[i] >= 0) {
        positivos++
    }

media = valores[0] + valores[1] + valores[2] + valores[3] + valores[4] + valores[5] + valores[6] + valores[7] + valores[8] + valores[9]
media = media / 10    
}

console.log(`A media dos valores é ${media}`);
console.log(`A quantidade de valores negativos é ${negativos}`);
console.log(`A quantidade de valores positivos é ${positivos}`);
console.log(`O percentual de valores negativos é ${(negativos / 10) * 100}%`);
console.log(`O percentual de valores positivos é ${(positivos / 10) * 100}%`);