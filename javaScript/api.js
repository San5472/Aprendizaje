let id = document.getElementById('id');
let button = document.getElementById('button');

button.addEventListener('click', function(){

    let inputId = id.value;
    fetch('https://jsonplaceholder.typicode.com/todos/' + inputId)
    .then(response => response.json())
    .then(json =>{
            let a = document.querySelector("body > main > table > tbody > tr:nth-child(1) > td:nth-child(2)");
            a.innerHTML = json.userId;

            let b = document.querySelector ("body > main > table > tbody > tr:nth-child(2) > td:nth-child(2)");
            b.innerHTML = json.id;

            let c = document.querySelector ("body > main > table > tbody > tr:nth-child(3) > td:nth-child(2)");
            c.innerHTML = json.title;

            let d = document.querySelector ("body > main > table > tbody > tr:nth-child(4) > td:nth-child(2)");
            d.innerHTML = json.completed;
        }

    )
});
