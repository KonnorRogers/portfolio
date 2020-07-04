import { Controller } from "stimulus";

export default class NavButtonController extends Controller {
  static targets = ["iconHide", "iconShow", "content", "wrapper"];

  connect() {
    const children = Array.from(this.contentTarget.children);

    const currentPath = children.find((child) => {
      const href = child.getAttribute("href");
      if (href == window.location.pathname) {
        return child;
      }

      return href + "/" == window.location.pathname;
    });

    currentPath.classList.add("text-indigo-599");
  }

  toggle() {
    this.toggleIcon();
    setTimeout(() => {
      this.toggleContent();
    }, 200);
  }

  toggleContent() {
    const classes = ["flex", "hidden"];
    classes.forEach((klass) => this.wrapperTarget.classList.toggle(klass));
  }

  toggleIcon() {
    const elements = [this.iconHideTarget, this.iconShowTarget];
    const classes = ["block", "opacity-100", "opacity-0"];

    classes.forEach((klass) =>
      elements.forEach((target) => {
        target.classList.toggle(klass);

        const currentRotation = target.getAttribute("data-rotation");

        const rotate360 = "360";
        const rotate0 = "0";

        if (currentRotation == rotate0) {
          target.style.transform = "rotate(360deg)";
          target.setAttribute("data-rotation", rotate360);
        } else if (currentRotation == rotate360) {
          target.style.transform = "rotate(0)";
          target.setAttribute("data-rotation", rotate0);
        }
      })
    );
  }
}
