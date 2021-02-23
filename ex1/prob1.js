const func = (n) => {
    for (var i = 0; i < n * 1000; i++) {
        for (var j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }
}

func(50);

// This is Big O of N Squared