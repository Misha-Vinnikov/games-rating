const fs = require('fs');
const { getRandomGame } = require('../appModules/api');

async function gameRouteController(res) {
    fs.readFile('./dataset/ratin.json', (err, ratinFile) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        };

        const data = JSON.parse(ratinFile);
        const game = getRandomGame(game);
        res.setHeader('Content=Type', 'application/json');
        res.end(JSON.stringify(game));
    })
}

module.exports = gameRouteController;