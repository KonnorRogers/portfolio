import { Application } from "stimulus"
import Turbolinks from 'turbolinks';

import NavBarController from "./controllers/nav_bar_controller.js";
import NavButtonController from "./controllers/nav_button_controller.js";

// fix a Parcel issue
window.parcelRequire = null

const application = Application.start();
application.register("nav-bar", NavBarController);
application.register("nav-button", NavButtonController);
Turbolinks.start();
