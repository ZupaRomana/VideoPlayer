
'use strict';

import MovieService from './shared/movie-service.js';
import MainController from './controllers/main-controller.js'

const movieService = new MovieService();
const mainPlaceholder = document.getElementById('main-placeholder');
const mainController = new MainController(movieService, mainPlaceholder);

mainController.run();