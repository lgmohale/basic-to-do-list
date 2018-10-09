function display(){
    fetch('http://localhost:9090/task/show')
    .then(res => res.json())
    .then(res => res.map(user => user))
    .then(userNames => document.getElementById("tasks").innerHTML = userNames.map(data=>`<h1>${data.name}</h1><button onclick="deleteTask('${data._id}');display()" class="btn btn-default" >DELETE</button> `).join(''));
    }

    function add(){
        const myPost = { };
        myPost.name = document.getElementById("name").value;
        const options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
        };

        fetch('http://localhost:9090/task/add', options)
        .then(res => res.json())
        .then(res => console.log(res));
    }

    function deleteTask(delTask){
        const myPost = { };
        myPost._id = delTask;
        const options = {
        method: 'DELETE',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
        };

        fetch('http://localhost:9090/task/delete', options)
        .then(res => res.json())
        .then(res => console.log(res));
    }