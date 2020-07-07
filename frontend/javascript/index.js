import "../styles/index.css"
import { Application } from "stimulus";
import Turbolinks from "turbolinks";
import Controllers from "../javascript/controllers"

console.info("Bridgetown is loaded!");
const application = Application.start();
Controllers.register(application)
Turbolinks.start();
