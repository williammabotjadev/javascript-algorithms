const funcOne = (n) => {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                for (var l = 0; l < 10; l++) {
                    console.log(i+j+k+l);
                }
            }
        }
    }
}

funcOne(50);

// This is Cubic Time