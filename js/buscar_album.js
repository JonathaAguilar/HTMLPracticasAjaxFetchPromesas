function buscarAlbumPorId() {
    let id = document.getElementById("albumId").value;
    const http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/albums/" + id;

    http.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            let res = document.getElementById("listaAlbum");
            res.innerHTML = "";
            const album = JSON.parse(this.responseText);

            res.innerHTML += `<tr>
                <td>${album.id}</td>
                <td>${album.title}</td>
            </tr>`;
        }
    }

    http.open('GET', url, true);
    http.send();
}

document.getElementById("btnBuscarAlbum").addEventListener("click", buscarAlbumPorId);
