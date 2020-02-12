const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => {
    console.log("i am here",err);
    next(err);
  });
};
module.exports = asyncMiddleware;
