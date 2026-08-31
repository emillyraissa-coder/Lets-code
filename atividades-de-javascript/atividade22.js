const readline = require(`readline`);

const conversor = (c) => {

    return (c * 9 / 5) + 32;

};

const calcularDesconto = (preco, percentual = 10) => {

    return preco - (preco * percentual / 100);

};

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

rl.question('Digite a temperatura em Celsius: ', (entradaTemperatura) => {

    const temperatura = Number(entradaTemperatura);

    console.log(
        `${temperatura}°C = ${conversor(temperatura)}°F`
    );

    rl.question('Digite o preço do produto: R$ ', (entradaPreco) => {

        const preco = Number(entradaPreco);

        rl.question('Digite o percentual de desconto: ', (entradaPercentual) => {

            const percentual = Number(entradaPercentual);

            console.log(`Preço original: R$${preco}`);
            console.log(`Desconto: ${percentual}%`);
            console.log(`Preço final: R$${calcularDesconto(preco, percentual)}`);

            rl.close();

        });

    });

});