import { Controller } from "stimulus";

export default class NavbarController extends Controller {
  connect() {
    const children = Array.from(this.element.children);

    children.forEach((child) => {
      const childHref = child.getAttribute("href") + "/";
      if (childHref == location.pathname) {
        child.classList.add("border-b-2");
        child.classList.add("border-green-400");
      }
    });
  }
}
