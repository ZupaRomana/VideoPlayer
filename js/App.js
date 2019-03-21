
'use strict';

import MovieService from './shared/movie-service.js';
import MainController from './controllers/main-controller.js'

const movieService = new MovieService();
const body = document.getElementsByTagName('body')[0];
const mainController = new MainController(movieService, body);

mainController.run();