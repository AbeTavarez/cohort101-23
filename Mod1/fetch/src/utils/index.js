const apiKey = 'live_dgKiWMUGWNWWH6a8eN6TvXI2ZLokajI1TSgTOwzMWtSsKu1T11S39l4RD5SArlPH';

const breedsUrl = 'https://api.thecatapi.com/v1/breeds';


export async function getBreeds() {
    try {
        // make an http request
        const response = await fetch(breedsUrl);

        // parse the data from the response
        const data = await response.json();

        // console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}


export function createOptionElement(breedsArr, catSelect) {
    breedsArr.forEach(item => {
        const optionEle = document.createElement('option');

        optionEle.textContent = item.name;
        optionEle.value = item.id;

        // console.log(optionEle);
        catSelect.appendChild(optionEle);
    });
}

export async function getBreedInfo(id) {
    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}&api_key=${apiKey}`);
        const data = await res.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export function createImage(catsInfoArr, container) {
    catsInfoArr.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.width = 400;
        img.height = 400;
        container.appendChild(img);
    });
}