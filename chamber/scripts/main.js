
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

if (page == "directory.html") {
    memberFetch()
    const gridButton = document.querySelector("#grid");
    const display = document.querySelector("#members");
    const icon = document.querySelector("#icon");
    const icon2 = document.querySelector("#icon2")

    gridButton.addEventListener("click", () => {
        if (display.classList == "list") {
            display.classList.add("grid");
            display.classList.remove("list");
            icon.classList.add("fa-table-list")
            icon.classList.remove("fa-grip-vertical");
            icon2.classList.remove("fa-grip-vertical");
        } else {
            display.classList.add("list");
            display.classList.remove("grid");
            icon.classList.remove("fa-table-list")
            icon.classList.add("fa-grip-vertical");
            icon2.classList.add("fa-grip-vertical");
        }
    });
}

function displayPopUp() {
    let day = Date(dt).toString();
    let weekday = day[0] + day[1] + day[2];
    if (weekday == "Mon" || weekday == "Tue" || weekday == "Wed") {
        bruce.classList.remove("hidden");
        bruce.classList.add("shown")
    }
}

if (page == "index.html") {
    apiFetch();
    memberFetch();
    const hulk = document.getElementById("banner");
    const bruce = document.getElementById("bruce");
    displayPopUp();
    hulk.addEventListener("click", () => {
        bruce.classList.remove("shown")
        bruce.classList.add("hidden");
    });
}




