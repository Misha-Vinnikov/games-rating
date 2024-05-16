const fs = require("fs");
const mimeTypes = require("./mime-types");

function staticFile(res, filePath, ext) {
    res.setHeader("Context-Type", mimeTypes[ext]);
    fs.readFile("./public" + filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end("NOT Found");
        }
        res.end(data);
    })
}

module.exports = staticFile;
