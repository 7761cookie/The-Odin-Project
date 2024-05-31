//click is a counter to allow the reset function to take place
let click = 0;

//the toggle allows the input take place and delineates the create and remove elements
let toggle = false;

const btn = document.querySelector("button").addEventListener("click", (e) => {

    click++

    if (toggle == false) {

        const input = prompt("Enter number of rows");

        //takes the input and assigns it to variable to allow input values to be used
        let answer = input;

        //gets the correct grid size for the divs to sit in
        const gridSize = (answer * 10) + (answer * 2);
        grid.style.width = (gridSize + "px");


        if (answer <= 100 && answer >= 4) {
            for (i = 0; i < (answer * answer); i++) {
                const grid = document.querySelector("#grid");
                const content = document.createElement("div");
                content.classList.add("square");
                grid.appendChild(content);
                toggle = true;
                document.querySelector("button").innerHTML = "Reset";
            }
        }

        //alerts to try again upon wrong inputs from user    
        if (answer < 4) {
            alert('Try again - Not enough rows');
        }

        if (answer > 100) {
            alert('Try again - Less than 100 rows');
        }
    }

    //removes the html grid on second click
    if (click % 2 == 0) {
        const square = document.querySelectorAll(".square");
        square.forEach((square) => {
            square.remove();
            toggle = false;
            document.querySelector("button").innerHTML = "Click here";
        });
    }
}); 