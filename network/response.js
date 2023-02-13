function success(req, res, msg, status) {
  res.status(status || 200).json({
    error: "",
    body: msg
  });
}

function error(req, res, msg, status) {
  res.status(status || 500).json({
    error: msg,
    body: ""
  });
}


module.exports = {success, error};