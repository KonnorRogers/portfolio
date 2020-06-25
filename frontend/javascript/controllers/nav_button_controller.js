import { Controller } from "stimulus";

export default class NavButtonController extends Controller {
  static targets = ["iconHide", "iconShow", "content", "links"];

  connect() {
    const children = Array.from(this.linksTarget.children);

    const currentPath = children.find((child) => {
      return child.getAttribute("href") + "/";
    });

    currentPath.classList.add("text-indigo-500");
  }

  toggle() {
    const classes = ["flex", "hidden"];
    classes.forEach((klass) =>
      this.contentTargets.forEach((target) => target.classList.toggle(klass))
    );
  }
}
