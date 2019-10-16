const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })

function getCotacao(moeda){
    const url = 'https://dolarhoje.com';
    const rotaMoeda = moeda == 'dolar' ? '' : `/${moeda}-hoje`;
    const endpoint = `${url}${rotaMoeda}`;

    let valorMoeda = 0;

    console.log();
    console.log('Aguarde, consultando valor...');

    nightmare
        .goto(endpoint)
        .wait('.nacional')
        .evaluate(() => document.querySelector('#nacional').value)
        .end()
        .then(valor => {
            console.log(`1 ${moeda} custa ${valor} reais`);
            console.log();
        })
        .catch(error => {
            console.error('Search failed:', error)
        });
}

module.exports = getCotacao;