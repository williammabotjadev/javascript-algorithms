const egQuad = (n) => {
    for(var i = 0; i < n; i++) {
        console.log(i);
        for (var j = i; j < n; j++) {
            console.log(j);
        }
    }
}

egQuad(50);