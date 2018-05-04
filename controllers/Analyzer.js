

module.exports = {
  analyzer : (req, res) => {
    res.status(200).send(req.result)
  }
};
