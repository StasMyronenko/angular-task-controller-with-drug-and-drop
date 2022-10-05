const jwt = require('jsonwebtoken');
const {TokenExpiredError} = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    if (req.headers.authorization){
      const data = await jwt.verify(req.headers.authorization.split(' ')[1], 'json-server-auth-123456')
      // console.log(req.body)
      req.body['userId'] = Number(data.sub)
      // console.log(req.body)
    }
  }
  catch (TokenExpiredError) {
    req.body['userId'] = 'null';
  }

  next()
}
