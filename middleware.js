const myMiddleware = (req, res, next) => {
    console.log('Middleware function executed');
    next();
  };

module.exports = myMiddleware;