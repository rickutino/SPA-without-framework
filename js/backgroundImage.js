export class BackgroundImage {

  execute() {
    const { pathname } = window.location;
    const bodyImg = document.querySelector("body");
    console.log(pathname == "/")

    switch(pathname) {
      case "/":
        bodyImg.classList.add("home")
        bodyImg.classList.remove("explore")
        bodyImg.classList.remove("universe")
        break;
      case "/explore":
        bodyImg.classList.add("explore")
        bodyImg.classList.remove("home")
        bodyImg.classList.remove("universe")
        break;
      case "/universe":
        bodyImg.classList.add("universe")
        bodyImg.classList.remove("home")
        bodyImg.classList.remove("explore")
        break;
    }
  }
}