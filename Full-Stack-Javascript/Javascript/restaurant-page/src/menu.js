const menu = () => {
    const content = document.querySelector("#content");

    const menuPage = document.createElement("div");
    menuPage.innerHTML = `
    
     <h1>Menu</h1>

    <div class="card">
    <h3>Starters</h3>
    <img src="">
    <p>Delicious appetizers to begin your meal.</p>
    </div>

    <div class="card">
    <h3>Mains</h3>
    <img src="">
    <p>Satisfying and hearty main courses.</p>
    </div>

    <div class="card">
    <h3>Deserts & Drinks</h3>
    <img src="">
    <p>Sweet and delightful treats to end your meal. <br><br>
    Refreshing beverages to complement your food.</p>
    </div>
        
    `;
    content.appendChild(menuPage);

}

export default menu