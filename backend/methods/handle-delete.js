const fs = require("fs");

const handleDelete = (req, res) => {
  const id = req.url.split("/")[2];

  if (!id) {
    res.writeHead(404);
    return res.end(JSON.stringify({ success: false, message: "Id is not defined" }));
  }

  const movies = JSON.parse(fs.readFileSync("./data/movies.json"), "utf-8");

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    res.writeHead(404);
    return res.end(JSON.stringify({ success: false, message: "The movie you want to delete was not found" }));
  }

  const filtred = movies.filter((movie) => movie.id !== id);

  fs.writeFileSync("./data/movies.json", JSON.stringify(filtred), "utf-8");

  res.writeHead(204);
  return res.end();
};

module.exports = handleDelete;
