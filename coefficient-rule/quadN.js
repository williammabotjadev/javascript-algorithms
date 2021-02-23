const egQuadN = (n) => {
    var count = 0;
    for (var i = 0; i < n*n; i++) {
        count += 1;
    }
    return count;
}

console.log(egQuadN(50));