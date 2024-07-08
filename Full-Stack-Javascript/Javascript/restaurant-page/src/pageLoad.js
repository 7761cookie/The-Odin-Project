import about from "./about";
import home from "./home"
import menu from "./menu";

const pageLoad = () => {

    home()

    const button = (e) => {

        const content = document.querySelector("#content");
        const divToRemove = content.querySelector("div");

        if (divToRemove) {
            content.removeChild(divToRemove);
        }

        if (e.target.id === "Home") {
            home();
        } else if (e.target.id === "Menu") {
            menu();
        } else {
            about();
        }
    }

    const homeElement = document.getElementById("Home");
    const menuElement = document.getElementById("Menu");
    const aboutElement = document.getElementById("About");
    homeElement.addEventListener("click", button)
    menuElement.addEventListener("click", button)
    aboutElement.addEventListener("click", button)

}

export default pageLoad;