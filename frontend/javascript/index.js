import * as Stimulus from "stimulus"
import Turbolinks from 'turbolinks';

import NavBarController from "./controllers/nav_bar_controller.js";
import NavButtonController from "./controllers/nav_button_controller.js";

const application = Stimulus.Application.start();
application.register("nav-bar", NavBarController);
application.register("nav-button", NavButtonController);
Turbolinks.start();
