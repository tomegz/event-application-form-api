/*
 * Catch errors from controllers that use async/await and pass them along
 */
exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

/*
 * Catch MongoDB validation errors
 */
exports.validationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  let errorArray = [];
  const errorKeys = Object.keys(err.errors);
  const messages = errorKeys.map(key => ({ text: err.errors[key].message, type: "error" }));
  const feedback = { messages };
  res.status(500).json(feedback);
};