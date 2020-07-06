function toController(name, klass) {
  return {
    name,
    klass
  }
}

import NavButtonController from "./nav_button_controller"
import NavBarController from "./nav_bar_controller"

const controllers = [
  toController("nav-button", NavButtonController),
  toController("nav-bar", NavBarController),
]
const Controllers = {
  register: (application) => {
    controllers.forEach(controller => {
      application.register(controller.name, controller.klass)
    })
  }
}

export default Controllers;
