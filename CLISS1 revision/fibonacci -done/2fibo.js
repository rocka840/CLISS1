let display = document.getElementById("display");

function compute() {
    let A = 1;
    let B = 1;

    for (let i = 0; i <= 100; i++) {

        let C = A + B;
        A = B;
        B = C;

        if (i == 5) break; // break exists the loop.

        display.innerHTML += (C + " ");
        //to display all of the numbers
    }

}

/* could also do if (i == 5) break;{
                        display.innerHTML += (C + " "); */
}