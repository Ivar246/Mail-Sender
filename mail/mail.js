exports.sendMail = (req, res, next) => {
  const message = req.body.message;
  console.log(message);
  res.send(`<h1>${message}</h1>`);
  return;
};
