function doHeavyWork(x) {
    // promise takes callback
    // this has two parameters
    return new Promise((resolve, reject) => {
        if (x > 10) {
            reject(new Error("X > 10"));
        }

        resolve("Good job! X <= 10");
    });
}

doHeavyWork(7).then(d => { console.log(d) }).catch(e => { console.log(e) });