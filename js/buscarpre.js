function buscarUsuarioPorId() {
    let id = document.getElementById("userId").value;
    const url = "https://jsonplaceholder.typicode.com/users/" + id;

    axios.get(url)
        .then(function(response) {
            const usuario = response.data;

            document.getElementById("userName").textContent = usuario.name;
            document.getElementById("userUsername").textContent = usuario.username;
            document.getElementById("userEmail").textContent = usuario.email;
            document.getElementById("userStreet").textContent = usuario.address.street;
            document.getElementById("userSuite").textContent = usuario.address.suite;
            document.getElementById("userCity").textContent = usuario.address.city;
        })
        .catch(function(error) {
            console.log(error);
        });
}

document.getElementById("btnBuscar").addEventListener("click", buscarUsuarioPorId);
