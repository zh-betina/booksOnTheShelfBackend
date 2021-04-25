const bkcasesRouter = require('express').Router();

bkcasesRouter.post('/bookcase', (req, res) => {
  return res.send('ok, got you');
});

module.exports = bkcasesRouter;