const about = () => {
    const content = document.querySelector("#content");

    const aboutPage = document.createElement("div");
    aboutPage.innerHTML = `
     <h1>About Us</h1>

    <div class="card">
    <h3>Head Chef</h3>
    <img src="">
    <p>Oversees kitchen operations and manages culinary staff to ensure high-quality food preparation.</p>
    </div>

    <div class="card">
    <h3>Manager</h3>
    <img src="">
    <p>Supervises overall restaurant operations, including staff, customer service, and financial management.</p>
    </div>

    <div class="card">
    <h3>Service</h3>
    <img src="">
    <p>Provides direct customer service, taking orders, serving food, and ensuring a pleasant dining experience.</p>
    </div>
        
    `;
    content.appendChild(aboutPage);

}

export default about