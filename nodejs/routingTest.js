const requestListener = (request, response) => {
  const { url } = request;

  if (url === "/") {
    if (method === "GET") {
    }
  }

  if (url === "/about") {
    if (method === "POST") {
    }
  }
  const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    const { method, url } = request;

    if (url === "/") {
      if (method === "GET") {
        response.end("Ini adalah halaman utama.");
      } else {
        response.end(`Halaman utama tidak mendukung metode ${method}.`);
      }
    } else if (url === "/about") {
      if (method === "POST") {
        response.end("Ini adalah halaman about dengan metode POST.");
      } else {
        response.end(`Halaman about tidak mendukung metode ${method}.`);
      }
    } else {
      response.end("Halaman tidak ditemukan.");
    }
  };
};
