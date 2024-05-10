function voteRouteController(res) {
    res.statusCode = 200;
    res.setHeader('Content=Type', 'application/json');
    res.end(JSON.stringify({ hello: 'world'}));
}

module.exports = voteRouteController;