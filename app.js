const addButton = document.getElementById('btn');
        addButton.addEventListener('click', addJSON);
        const output = document.querySelector('#output');

        function addJSON() {
            console.log('clicked');
            output.innerHTML = 'IT WORKS';
            const url = "https://koine-internal.mytalkdesk.eu/atlas/apps/lives";
            fetch(url).then(function(response){
                console.log(response.status);
                return response.text()
            })
            .then(function(data){
                console.log(data);
            })
        }