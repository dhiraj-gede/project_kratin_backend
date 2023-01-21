const passport = require("passport");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");



const verifyCallback = (req, res, reject) => async (err, user, info) => {
    if (info) {
        const err = new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
        reject(err)
      }
      if (err) {
        const err = new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
        reject(err)
      }
      if (!user) {
        const err = new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
        reject(err)
      }
      req.user = user
      res()
}

const auth = async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verifyCallback(req, resolve, reject)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };
module.exports = auth;