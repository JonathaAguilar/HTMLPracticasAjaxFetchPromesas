document.getElementById('showRandomImageButton').addEventListener('click', showRandomImage);


loadBreeds();

function loadBreeds() {
    fetch('https://dog.ceo/api/breeds/list')
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('breedList');
            data.message.forEach(breed => {
                breedList.innerHTML += `<option value="${breed}">${breed}</option>`;
            });
        })
        .catch(error => console.error('Error:', error));
}

function displayBreedImage() {
    const breed = document.getElementById('breedList').value;
    if (breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(data => {
                const dogImage = document.getElementById('dogImage');
                dogImage.src = data.message;
                dogImage.alt = `Un perro de raza ${breed}`;
                dogImage.hidden = false;
                document.getElementById('breedName').textContent = breed;
            })
            .catch(error => console.error('Error:', error));
    }
}

function showRandomImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dogImage');
            dogImage.src = data.message;
            dogImage.hidden = false;

            // Extraer la raza del URL de la imagen.
            const breedName = data.message.split('/')[4];
            document.getElementById('breedName').textContent = breedName;
        })
        .catch(error => console.error('Error:', error));
}
