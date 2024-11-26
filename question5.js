// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

const postElement = document.getElementById("posts");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const titleAndBody = document.createElement("div");
    const title = document.createElement("div");
    const body = document.createElement("div");

    titleAndBody.className = "titleAndBody";
    title.className = "title";
    body.className = "body";

    title.textContent = post.title;
    body.textContent = post.body;

    postElement.appendChild(titleAndBody);
    titleAndBody.append(title, body);
  });
}
getPosts();
