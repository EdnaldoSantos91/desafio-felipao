const readline = require('readline');

// Configuração do readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicita ao usuário um número
rl.question('Digite um número: ', (input) => {
  const numero = parseInt(input, 10);

  // Verifica se é Par ou Ímpar usando operador ternário
  const resultado = (numero % 2 === 0) ? 'Par' : 'Ímpar';

  // Exibe a mensagem
  console.log(`O número ${numero} é ${resultado}.`);

  // Fecha a interface readline
  rl.close();
});
