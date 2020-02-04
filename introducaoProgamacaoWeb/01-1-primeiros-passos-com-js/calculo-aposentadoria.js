// Cálculo de aposentadoria

const nome = 'Christopher';
const sexo = 'Masculino';
const idade = 21;
const contribuicao = 3;

const calc = ( idade + contribuicao ) 

if (sexo === 'Masculino' && calc >= 95) {
    console.log(`${nome}, você pode se aposentar.`);

} else if (sexo === 'Feminino' && calc >= 85) {
    console.log(`${nome}, você pode se aposentar.`);

} else {
    console.log(`${nome}, você não pode se aposentar.`)
}