function cargarUsuarios() {
    const http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/users";

    http.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            let res = document.getElementById("lista");
            res.innerHTML = "";
            const usuarios = JSON.parse(this.responseText);

            for (const usuario of usuarios) {
                res.innerHTML += `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.address.street}, ${usuario.address.suite}</td>
                    <td>${usuario.address.city}</td>
                    <td>${usuario.address.zipcode}</td>
                </tr>`;
            }
        }
    }

    http.open('GET', url, true);
    http.send();
}

document.getElementById("btnCargar").addEventListener("click", cargarUsuarios);


