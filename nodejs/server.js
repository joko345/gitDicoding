const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  const method = request.method;

  if (method === "GET") {
    response.statusCode = 200;
    response.end("<h1>Hi, ini respon GET</h1>");
    return;
  }

  if (method === "POST") {
    let body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      body = Buffer.concat(body).toString();
      try {
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(`<h1>Hai, ${name}!</h1>`);
      } catch (error) {
        response.statusCode = 400;
        response.end("<h1>Bad Request: Invalid JSON</h1>");
      }
    });
    return;
  }

  response.statusCode = 405;
  response.end("<h1>Method Not Allowed</h1>");
};

// Membuat server
const server = http.createServer(requestListener);

server.on("error", (error) => {
  console.error("Server error:", error.message);
});

const port = 5000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
