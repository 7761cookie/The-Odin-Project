import header from "./header";
import nav from "./nav";
import aside from "./aside";
import mainContent from "./main-content";
import footer from "./footer";
import listeners from "./listeners"

const pageLoad = () => {
    const content = document.getElementById("content");

    content.innerHTML = `
        ${header}
        ${nav}
        ${aside}
        ${mainContent}
        ${footer}
    `;

    listeners()


};

export default pageLoad;
