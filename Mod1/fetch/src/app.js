import { getBreeds, createOptionElement, getBreedInfo, createImage } from "./utils/index.js";

// Select Element
const catSelect = document.getElementById('cat-select');

// Button
const catBtn = document.getElementById('cat-btn');

// Pictures Container
const picturesContainer = document.getElementById('pictures-container');


// runs when the dom is loaded
window.addEventListener("DOMContentLoaded", async function() {
    // async operation
    const breeds = await getBreeds();
    createOptionElement(breeds, catSelect);
});

// Event Listeners
catBtn.addEventListener('click', async function() {
    const catsInfo = await getBreedInfo(catSelect.value);
    createImage(catsInfo, picturesContainer);
});