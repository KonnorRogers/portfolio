import "../styles/index.css"
import { Application } from "stimulus";
import Turbolinks from "turbolinks";

const application = Application.start();
const context = require.context("./controllers", true, /.js$/);
application.load(definitionsFromContext(context));
Turbolinks.start();	// Turbolinks.start();
