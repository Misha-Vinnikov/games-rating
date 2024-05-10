async function getData(url) {
    try {
        const respone = await fetch(url);
        return respone.json();
    } catch (err) {
        console.log(err);
    }
};

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

module.exports = { getData, getRandomGame }