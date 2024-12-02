const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.setHeader("Powered-By", "Node.js");
  const method = request.method;
  const url = request.url;

  // Menangani GET
  if (method === "GET" && url === "/") {
    response.statusCode = 200;
    response.end("<h1>GET, Adalah homepage</h1>");
    return;
  } else if (method === "GET") {
    response.statusCode = 404;
    response.end("Halaman tidak ditemukan.");
    return;
  }

  // Menangani POST
  if (method === "POST" && url === "/about") {
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
        response.end(
          JSON.stringify({
            message: "invalid json format",
          })
        );
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
