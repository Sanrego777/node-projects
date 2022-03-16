const http = require('http');
const host = 'localhost';
const port = 3030;

const server = http.createServer((req, res) => {
    const { method, headers, url } = req;
    if (req.url === '/') {
        res.writeHead(301, { "Location": `http://${headers.host}/home` });
        // res.end();
    }

    if (req.url = '/home') {
        res.end("Redirected to Home Page | using http module");
    }

    /**
    if (req.url === '/index') {
        res.writeHead(301, { "Location": "http://example.com" });
        res.end();
    }
     */

})

server.listen(port, host, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on http://${host}:${port}`);
});