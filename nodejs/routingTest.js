const requestListener = (request, response) => {
  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("Ini adalah halaman utama.");
    } else {
      response.statusCode = 405;
      response.end(`Halaman utama tidak mendukung metode ${method}.`);
    }
  } else if (url === "/about") {
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
          response.end(`<h1>Hai, ${name}! kita ada di about POST</h1>`);
        } catch (error) {
          response.statusCode = 400;
          response.end("<h1>Bad Request: Invalid JSON</h1>");
        }
      });
    } else if (method === "GET") {
      response.statusCode = 200;
      response.end("Ini adalah halaman about dengan metode GET.");
    } else {
      response.statusCode = 405;
      response.end(`Halaman about tidak mendukung metode ${method}.`);
    }
  } else {
    response.statusCode = 404;
    response.end("Halaman tidak ditemukan.");
  }
};
