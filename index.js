const quoteHeading = document.getElementById('quote');
const authorHeading = document.getElementById('author');
const button = document.querySelector('button');
const main = document.querySelector('.mainContainer');

randomColor();

async function fetchData() {
    try {
        let response = await fetch("./data.json");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

let myProm = fetchData();

myProm.then((data) => {
    var randomQuotes = Math.floor(Math.random() * data.shayri.length);
    quoteHeading.innerHTML = data.shayri[randomQuotes].sher;
    authorHeading.textContent = `-  ${data.shayri[randomQuotes].shayar}`;
});

function randomColor() {
    const randomColorGen = `rgb(${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)})`;
    main.style.backgroundColor = randomColorGen;
    button.style.backgroundColor = randomColorGen;
    quoteHeading.style.color = randomColorGen;
    authorHeading.style.color = randomColorGen;
}

function quotesGenerator(sher, shayar) {
    quoteHeading.innerHTML = sher;
    authorHeading.textContent = `-  ${shayar}`;
}

button.addEventListener('click', () => {
    myProm.then((data) => {
        var randomQuotes = Math.floor(Math.random() * data.shayri.length);
        const { sher, shayar } = data.shayri[randomQuotes];
        randomColor();
        quotesGenerator(sher, shayar);
    }).catch(() => console.log('Promise Not Resolved'));
});
