fetch('https://swapi-api.hbtn.io/api/films/?format=json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error. Estado: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const list = document.getElementById("list_movies");
        
        for (var ele of data['results']) {
            var itm = document.createElement('li');
            itm.textContent = ele['title'];
            list.appendChild(itm);
        }
    });
