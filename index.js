const args = process.argv.slice(2);

switch(args[0]){
    case 'cotacao':
        const getCotacao = require('./cotacao.js');
        getCotacao(args[1]);

        break;
    default:
        console.log('Opção inválida!')
        break;
}