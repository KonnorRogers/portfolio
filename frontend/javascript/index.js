import "../styles/index.css";
import { Application } from "https://cdn.pika.dev/stimulus@^1.1.1";
import Turbolinks from "https://cdn.pika.dev/turbolinks@^5.2.0";

import NavBarController from "./controllers/nav_bar_controller.js";
import NavButtonController from "./controllers/nav_button_controller.js";

const application = Application.start();
application.register("nav-bar", NavBarController);
application.register("nav-button", NavButtonController);
Turbolinks.start();
