const home = () => {
    const content = document.querySelector("#content");

    const homePage = document.createElement("div");
    homePage.innerHTML = `
    <div>
    <h1>The Hungry Horse</h1>
    </div>

    <div class="card">
    <img src="">
    <p>A great family feel, with plenty of choice, catering to all dietry types.</p>
    <h3>Signature</h3>
    </div>

    <div class="card">
    <h2>Hours</h2>
    <p> Sunday: 8am - 8pm <br>
        Monday: 6am - 6pm <br>
        Tuesday: 6am - 6pm <br>
        Wednesday: 6am - 6pm <br>
        Thursday: 6am - 10pm <br>
        Friday: 6am - 10pm <br>
        Saturday: 8am - 10pm <br>
    </p>
    </div>

      <div class="card">
    <h2>Location</h2>
    <p>
       123 Forest Drive, Forestville, Maine
    </div>    
    `;
    content.appendChild(homePage);

}

export default home