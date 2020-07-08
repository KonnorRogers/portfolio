import { Controller } from "stimulus";

export default class NavBarController extends Controller {
  connect() {
    if (window.location.pathname == "/") {
      return;
    }

    this.highlightCurrentPath();
  }

  highlightCurrentPath() {
    const border = "border-green-400";
    const currentPath = this.findCurrentPath();

    if (currentPath) {
      this.findCurrentPath().classList.add(border);
    }
  }

  findCurrentPath() {
    const children = Array.from(this.element.children);

    return children.find((child) => {
      const href = child.getAttribute("href");

      if (href == window.location.pathname) {
        return child;
      }

      return href + "/" == window.location.pathname;
    });
  }
}
