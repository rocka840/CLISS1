function sigma() {

    let result = 0;

    for (i = 3; i < 10; i++) {
        result = result + 2 * i * (i - 1);
    }
    alert(result);
}