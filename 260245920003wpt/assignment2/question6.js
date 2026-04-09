const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    // GET Request
    if (req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write(`
            <h2>Simple Node.js Form</h2>
            <form method="POST" action="/">
                Name: <input type="text" name="name"><br><br>
                Email: <input type="email" name="email"><br><br>
                <input type="submit" value="Submit">
            </form>
        `);

        res.end();
    }

    // POST Request
    else if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const data = querystring.parse(body);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h2>Form Submitted</h2>`);
            res.write(`<p>Name: ${data.name}</p>`);
            res.write(`<p>Email: ${data.email}</p>`);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});