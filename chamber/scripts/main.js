
const darkModeButton = document.getElementById('darkModeButton');
const main = document.querySelector('main');

darkModeButton.addEventListener('click', () => {
    if (darkModeButton.textContent.includes("☑️")) {
        main.classList.toggle('dark-mode');
        darkModeButton.textContent = "❎";
    } else {
        main.classList.toggle('dark-mode');
        darkModeButton.textContent = "☑️";
    }

});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



