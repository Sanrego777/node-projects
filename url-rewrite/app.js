const http = require('http');
const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    let requestedPath = req.url;
    if (requestedPath === '/index') {
        req.url = '/home';
    }

    if (req.url === '/home') {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({
            PathRequested: requestedPath,
            PathRewroteTo: req.url,
            Messgae: `successfully re-wrote URL from ${requestedPath} to ${req.url} without changing browser URL`,
            Source: "using http module"
          }));
    }
})

server.listen(port, host, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on http://${host}:${port}/index`);
});