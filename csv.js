const http = require("http");

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1,Rafael Switala,rafael.switala@online-software-ag.de`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Der Server läuft unter folgender Adresse: http://${host}:${port}`);
});


