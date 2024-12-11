// Importa o módulo readline
const readline = require('readline');

// Cria a interface para capturar entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o nome do herói
rl.question("Digite o nome do herói: ", (nome) => {
  // Solicita a quantidade de XP
  rl.question("Digite a quantidade de XP do herói: ", (xpInput) => {
    const xp = parseInt(xpInput, 10); // Converte para número inteiro

    // Valida a entrada de XP
    if (isNaN(xp) || xp < 0) {
      console.log("Por favor, insira um número válido para XP.");
    } else {
      // Determina o nível com base no XP
      const nivel = 
        xp < 1000 ? "Ferro" :
        xp <= 2000 ? "Bronze" :
        xp <= 5000 ? "Prata" :
        xp <= 7000 ? "Ouro" :
        xp <= 8000 ? "Platina" :
        xp <= 9000 ? "Ascendente" :
        xp <= 10000 ? "Imortal" :
        "Radiante"; // Maior que 10.000

      // Exibe a mensagem final
      console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    }

    // Encerra o readline
    rl.close();
  });
});
