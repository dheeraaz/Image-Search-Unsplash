"use strict";
const accessKey = "Cba9vZHz-X3_0F90IiFZyqeh03cN1sA2FSRmJRZy6xk";

const formBox = document.getElementById("form_box");
const searchBox = document.getElementById("search_box");
const searchResults = document.getElementById("search_results");
const moreBtn = document.getElementById("more_btn");


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;

    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`);
    const data = await response.json();

    let results = data.results;

    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);

        searchResults.style.backgroundColor = "#0B0D1A";
        moreBtn.style.display = "block";
    });


}


formBox.addEventListener("submit", (e) => {
    e.preventDefault();

    page = 1;
    searchResults.innerHTML = "";

    searchImages()
})

moreBtn.addEventListener("click", (e) => {
    page++;
    searchImages()
})


