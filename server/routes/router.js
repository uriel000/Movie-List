const express = require('express');
const route = express.Router();
// require the render.js where the callback functions are loc
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET /add-users
 */
route.get('/add-user', services.add_user);

/**
 * @description update user
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);

// API
route.post('/api/movie', controller.create);
route.get('/api/movie', controller.find);
route.put('/api/movie/:id', controller.update);
route.delete('/api/movie/:id', controller.delete);

// export this file so it can be used to the server.js
module.exports = route;