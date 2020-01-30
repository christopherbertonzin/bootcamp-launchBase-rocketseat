// Cálculo de IMC

const nome = 'Christopher';
const peso = 80 ;
const altura = 1.78;
const sexo = 'Masculino';

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso. Seu IMC é de ${imc}`);

} else if (imc < 29.9) {
    console.log(`${nome} você não está acima do peso. Seu IMC é de ${imc}`);

} else {
    console.log(`${nome} você está acima do peso. Seu IMC é de ${imc}`)
}