function calculate() {
    let result = 1; //it is one because anything * 0 is 0.

    let container = document.getElementById("container");

    let M = document.getElementById("M").value;
    let n = document.getElementById("n").value;

    for (let i = 0; i < n; i++) {
        result = result * M;
    }
    container.innerHTML = result;
}