import { Controller } from "stimulus";

export default class NavBarController extends Controller {
  connect() {
    if (window.location.pathname == "/") {
      return;
    }
    const children = Array.from(this.element.children);

    const currentPath = children.find((child) => {
      const href = child.getAttribute("href");
      return href + "/" == window.location.pathname;
    });

    currentPath.classList.add("border-green-400");
  }
}
