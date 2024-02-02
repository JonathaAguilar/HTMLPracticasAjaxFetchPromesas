// Función con manejo de promesas
function buscarPaisConPromesa() {
    let nombrePais = document.getElementById("countryName").value;
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatosPais(data[0]))
        .catch(error => console.error('Error en la búsqueda: ' + error));
}

// Función con async/await
async function buscarPaisConAwait() {
    let nombrePais = document.getElementById("countryName").value;
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarDatosPais(data[0]);
    } catch (error) {
        console.error('Error en la búsqueda: ' + error);
    }
}

function mostrarDatosPais(pais) {
    document.getElementById("countryCapital").textContent = pais.capital ? pais.capital[0] : 'No disponible';
    document.getElementById("countryLanguage").textContent = Object.values(pais.languages).join(', ');
}

document.getElementById("btnBuscarPais").addEventListener("click", buscarPaisConPromesa);
