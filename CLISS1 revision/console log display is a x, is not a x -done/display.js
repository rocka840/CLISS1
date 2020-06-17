function compute() {

    for (i = 100; i <= 200; i++) {
        //starting number   ;   ending number.
        if (i % 3 == 0) { //if 3 is divisable by nbr that is 0
            console.log("this is divisable by 3 " + i); //i meaning the number in console
        } else {
            console.log(i); //just number.
        }
    }
}