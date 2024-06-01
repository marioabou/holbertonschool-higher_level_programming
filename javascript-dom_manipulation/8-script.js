fetch('https://hellosalut.stefanbohacek.dev/?lang=fr')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error. Estado: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const list = document.getElementById("hello");
        list.textContent = data['hello'];
    });
