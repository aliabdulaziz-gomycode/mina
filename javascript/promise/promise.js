// synchronous vs asynchronous
// synchronous: tasks which do not take long time to execute. (متزامن)
// asynchronous: tasks that take long time to execute. (غير متزامن)

setTimeout(function () {
    console.log("This is 1");
}, 0);

// asynchronous example: fetch();
// fetch().then().catch();
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (data) {
        return data.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    });

console.log("This is 2");
console.log("This is 3");
console.log("This is 4");
