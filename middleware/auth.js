const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//taking token from cookie so that user can authenticated while login 

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // we can access the token using cookies
  const { token } = req.cookies;
  const JWT_SECRET = "hghgfhgddfdgfdffffsfsrtuy";

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, JWT_SECRET);

  // till the time user is login we can access user from req.user
  // findById has decodedData.id as in jwt.sign we have given id 

  req.user = await User.findById(decodedData.id);

  // since these are middlewares we have next so that it can go to next function call
  next();
});

// admin role or other user
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // in not admin in user role which is given in user model
    // role can be changed in mongo 3T to check the results
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
