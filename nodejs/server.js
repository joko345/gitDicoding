const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  const method = request.method; //set path untuk request
  response.statusCode = 200; //respon untuk status 200OK

  let body = [];

  if (method === "GET") {
    response.end("HI GET");
  }

  if (method === "POST") {
    let body = [];
    request.on("data", (chunk) => {
      //saat data ada input maka simpan potongan input(chunk)
      body.push(chunk);
    });
    request.on("end", () => {
      //saat input selesai simpan dalam body
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }

  if (method === "PUT") {
    response.end("HI PUT");
  }

  if (method === "DELETE") {
    response.end("HI DELETE");
  }

  response.statusCode = 405;
  response.end("method not exist");
};

const server = http.createServer(requestListener);
console.log("Halo, kita akan belajar membuat server");

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
