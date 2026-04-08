const handleDefault = (req, res) => {
  res.statusCode = 404;

  res.write(
    JSON.stringify({
      success: false,
      message: "The endpoint you requested does not exist",
    })
  );

  return res.end();
};

module.exports = handleDefault;
