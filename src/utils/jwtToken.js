// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  user = user._doc;
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  user.token = token;

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user
  });

};

module.exports = sendToken;