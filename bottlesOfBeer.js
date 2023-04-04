function beer() {
    let bottlesOfBeer = 99;

    while (bottlesOfBeer > 0) {
        let bottleWord = "bottles";
        if (bottlesOfBeer === 1) {
            bottleWord = "bottle"
        }
        if (bottlesOfBeer === 0) {
            bottlesOfBeer = "No more ";
        }
        console.log(bottlesOfBeer + " " + bottleWord + " of beer on the wall");
        console.log(bottlesOfBeer + " " + bottleWord +" of beer");
        bottlesOfBeer--;
        console.log("Take one down and pass it around.");
        console.log(bottlesOfBeer + " " + bottleWord + " of beer on the wall");

    }
}