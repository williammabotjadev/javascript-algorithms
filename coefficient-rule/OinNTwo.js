const egA = (n) => {
    var count = 0;
    for (var i = 0; i < 5*n; i++) {
        count += 1;
    }
    return count;
}

console.log(egA(50));