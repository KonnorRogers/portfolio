import { Controller } from "stimulus";

export default class NavBarController extends Controller {
  connect() {
    const children = Array.from(this.element.children);

    const currentPath = children.find((child) => {
      const href = child.getAttribute("href");
      if (href == window.location.pathname) {
        return child;
      }

      return href + "/" == window.location.pathname;
    });

    currentPath.classList.add("border-green-400");
  }
}
