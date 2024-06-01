fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error. Estado: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const ele = document.getElementById("character");
        ele.textContent = data['name'];
    });
