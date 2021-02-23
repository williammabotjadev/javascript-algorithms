const egLog = (n) => {
    for (let i = 2; i <= n; i = i * 2) {
        console.log(i);
    }
}

egLog(1000000);