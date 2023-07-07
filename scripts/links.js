const baseURL = "https://hekuta6.github.io/wdd230/";
const linksURL = "https://hekuta6.github.io/wdd230/data/links.json";
const weekElement = document.getElementById("learning-activities");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw new Error("Failed to fetch links");
        }
    } catch (error) {
        console.error(error);
    }
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const weekHeader = document.createElement("h4");
        weekHeader.textContent = week.week;
        weekElement.appendChild(weekHeader);
        const weekList = document.createElement("ul");

        week.links.forEach((link) => {
            const liElement = document.createElement("li");
            const aElement = document.createElement("a");
            aElement.href = link.url;
            aElement.textContent = link.title;
            liElement.appendChild(aElement);
            weekList.appendChild(liElement);
        });
        weekElement.appendChild(weekList);
    });
}

getLinks();