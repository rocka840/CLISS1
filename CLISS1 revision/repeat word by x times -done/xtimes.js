let input = document.getElementById("input");
let container = document.getElementById("container");

function compute() {
    let word = input.value; //this makes the word worth something
    let output = ""; //to be used in a If statment

    for (i = 0; i < word; i++) { //to repeat the If
        if (i == word - 1) { //meaning that the next line is only to do with the last output
            output = output + "hello "; //declare the word
        } else {
            output = output + "hello, " //to have comma
        }
    }

    container.innerHTML = output; //export the answer

}