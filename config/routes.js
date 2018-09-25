module.exports = function(app){
  let indexController = require('../app/controllers/index');
  let usersController = require('../app/controllers/users');

  app.use('/', indexController);
  app.use('/users', usersController);
}