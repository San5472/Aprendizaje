var id = document.getElementById("id")
var button = document.getElementById("button")

button.addEventListener("click", function(){
    var inputId = id.value;
    fetch('https://jsonplaceholder.typicode.com/posts/1'+ inputId )
      .then(response => response.json())
      .then(json => {
        document.querySelector("body > main > header > table > tbody > tr:nth-child(1) > th:nth-child(1)")
        a.innerHTML = json.UserId

        var b = document.querySelector("body > main > header > table > tbody > tr:nth-child(2) > th:nth-child(1)")
        b.innerHTML = json.id
        
        var c = document.querySelector("body > main > header > table > tbody > tr:nth-child(3) > th:nth-child(1)")
        c.innerHTML = json.title

        var d = document.querySelector("body > main > header > table > tbody > tr:nth-child(4) > th:nth-child(1)")
        d.innerHTML = json.body
      }
    )
})