import { Controller } from "stimulus";

export default class NavBarController extends Controller {
  connect() {
    const children = Array.from(this.element.children);

    const currentPath = children.find((child) => {
      return child.getAttribute("href") + "/";
    });

    currentPath.classList.add("border-green-400");
  }
}
