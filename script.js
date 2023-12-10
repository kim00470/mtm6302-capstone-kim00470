document.addEventListener("DOMContentLoaded", function() {
    const apodImage = document.getElementById("apod-image");
    const apodTitle = document.getElementById("apod-title");
    const favouriteButton = document.getElementById("favourite-button");
    const favouritesGallery = document.getElementById("favourites-gallery");
    const dateInput = document.getElementById("date-input");
    const searchButton = document.getElementById("search-button");
    const apodDescription = document.getElementById("apod-description");
    const apiKey = "e5W9HsAkBADrKDy4VQzY8y3ufh3MrEr1wa3VydZB";

    function fetchAPOD() {
        const date = dateInput.value;
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                apodImage.src = data.hdurl;
                apodTitle.textContent = data.title;
                apodDescription.textContent = data.explanation;
                favouriteButton.style.display = "inline";
            })
            .catch(error => {
                console.error("Error fetching APOD data:", error);
            });
    }

    searchButton.addEventListener("click", fetchAPOD);

    function addToFavourites() {
        const favouriteImage = document.createElement("img");
        favouriteImage.src = apodImage.src;
        favouriteImage.alt = apodTitle.textContent;
        favouritesGallery.appendChild(favouriteImage);
    }

    favouriteButton.addEventListener("click", addToFavourites);
});
