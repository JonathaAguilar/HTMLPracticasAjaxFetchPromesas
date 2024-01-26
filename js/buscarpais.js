async function buscarPais() {
    let nombrePais = document.getElementById("countryName").value;
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarDatosPais(data[0]);
    } catch (error) {
        console.error('Hubo un error en la búsqueda del país:', error);
    }
}

function mostrarDatosPais(pais) {
    document.getElementById("countryCapital").textContent = pais.capital[0];
    document.getElementById("countryLanguage").textContent = Object.values(pais.languages)[0];
}

function limpiarDatos() {
    document.getElementById("countryName").value = '';
    document.getElementById("countryCapital").textContent = '';
    document.getElementById("countryLanguage").textContent = '';
}

document.getElementById("btnBuscarPais").addEventListener("click", buscarPais);
document.getElementById("btnLimpiar").addEventListener("click", limpiarDatos);
async function mostrarTodosLosPaises() {
    try {
        const url = "https://restcountries.com/v3.1/all";
        const respuesta = await fetch(url);
        const paises = await respuesta.json();
        mostrarDatosPaises(paises);
    } catch (error) {
        console.error("Surgió un error: " + error);
    }
}

function mostrarDatosPaises(paises) {
    const res = document.getElementById('listaPaises');
    res.innerHTML = "";
    paises.forEach(pais => {
        res.innerHTML += `<div>${pais.name.common}, Capital: ${pais.capital ? pais.capital[0] : 'No disponible'}, Lenguajes: ${Object.values(pais.languages).join(', ')}</div>`;
    });
}

document.getElementById("btnCargarP").addEventListener('click', mostrarTodosLosPaises);
document.getElementById("btnCargarA").addEventListener('click', mostrarTodosLosPaises);

document.getElementById("btnLimpiar").addEventListener("click", function(){
    document.getElementById("listaPaises").innerHTML = "";
});
