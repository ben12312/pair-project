const Controller = require('../controller/projectController');
const projectRouter = require('express').Router();

projectRouter.get('/', Controller.showAll);
projectRouter.get('/add', Controller.addGet);
projectRouter.post('/add', Controller.addPost);
projectRouter.get('/:id/edit', Controller.editGet);
projectRouter.post('/:id/edit', Controller.editPost);
projectRouter.get('/:id/delete', Controller.delete);
projectRouter.get('/:id/devs', Controller.addDevsGet);
projectRouter.post('/:id/devs', Controller.addDevsPost);

module.exports = projectRouter