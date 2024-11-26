// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

const photosElement = document.getElementById("photos");

async function getPhotos() {
  const response2 = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data2 = await response2.json();

  data2.forEach((photo) => {
    const photos = document.createElement("img");

    if (photo.id <= 10) {
      photos.src = photo.thumbnailUrl;
      photosElement.appendChild(photos);
    }
    photos.addEventListener("click", (e) => {
      alert(`${photo.title}`);
    });
  });
}

getPhotos();
