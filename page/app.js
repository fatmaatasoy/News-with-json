let myObj = {
    url: "./data.json",
}


let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (xhr.headers) {
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject(xhr.statusText)
            }
        };
        xhr.onerror = () => {
            reject(xhr.statusText)
        };
        xhr.send(obj.body)
    });
}
request(myObj).then(data => {
    let users = JSON.parse(data);
    let html = "";
    users.result.forEach(user => {
        html +=
            `
         <div class="card mb-6">
        <div class="row mx-auto mb-5 pb-5">
            <div class="col-lg-5 my-auto">
                <img src="${user.image}" alt="Haber" style="max-width: 400px;">
            </div>
            <div class="col-lg-6 my-auto">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.description}</p>
                    <button class="btn btn-danger">  <a href="${user.url}" >Devamı >></a></button>
                </div>
            </div>
        </div>
    </div>`
        document.querySelector(".row").innerHTML = html

    })


}).catch(error => {
    console.log(error);
});

function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var pi =Math.PI
    // Print the area of the circle:
    var area=pi*(r*r)
    // Print the perimeter of the circle:
var perimeter=2*pi*r

     console.log(area)
     console.log(perimeter)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
console.log(main(2,6));



